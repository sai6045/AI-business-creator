# ── Base stage ────────────────────────────────────────────────────────────────
FROM node:20-alpine AS base

WORKDIR /app

# ── Dependencies stage ────────────────────────────────────────────────────────
FROM base AS dependencies

COPY package*.json ./
RUN npm ci --only=production

# ── Development stage ─────────────────────────────────────────────────────────
FROM base AS development

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ── Builder stage ─────────────────────────────────────────────────────────────
FROM base AS builder

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Production stage (Nginx) ──────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Copy custom Nginx config
COPY ../docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
