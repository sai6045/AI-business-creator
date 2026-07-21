-- AI Business Creator Database Initialization
-- This script runs when the PostgreSQL container starts for the first time.

-- Enable useful extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";  -- For fuzzy text search
CREATE EXTENSION IF NOT EXISTS "citext";    -- For case-insensitive text

-- Set timezone
SET timezone = 'UTC';

-- Log initialization
DO $$
BEGIN
    RAISE NOTICE 'AI Business Creator database initialized at %', NOW();
END
$$;
