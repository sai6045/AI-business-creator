"""General utility helper functions."""
import hashlib
import re
import secrets
import string
from datetime import datetime, timezone
from typing import Any, Dict, Optional


def utcnow() -> datetime:
    """Return the current UTC datetime with timezone info."""
    return datetime.now(tz=timezone.utc)


def generate_token(length: int = 32) -> str:
    """Generate a cryptographically secure random token."""
    return secrets.token_urlsafe(length)


def generate_code(length: int = 6) -> str:
    """Generate a numeric verification code."""
    return "".join(secrets.choice(string.digits) for _ in range(length))


def slugify(text: str) -> str:
    """Convert text to a URL-safe slug."""
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    return re.sub(r"^-+|-+$", "", text)


def hash_value(value: str, salt: Optional[str] = None) -> str:
    """Hash a value using SHA-256 with optional salt."""
    if salt:
        value = f"{salt}:{value}"
    return hashlib.sha256(value.encode()).hexdigest()


def paginate(items: list[Any], page: int, per_page: int) -> Dict[str, Any]:
    """Paginate a list of items."""
    total = len(items)
    start = (page - 1) * per_page
    end = start + per_page
    return {
        "items": items[start:end],
        "total": total,
        "page": page,
        "per_page": per_page,
        "pages": (total + per_page - 1) // per_page,
        "has_next": end < total,
        "has_prev": page > 1,
    }


def sanitize_email(email: str) -> str:
    """Normalize an email address to lowercase and stripped."""
    return email.lower().strip()


def truncate_text(text: str, max_length: int, suffix: str = "...") -> str:
    """Truncate text to a maximum length with a suffix."""
    if len(text) <= max_length:
        return text
    return text[: max_length - len(suffix)] + suffix
