"""User Pydantic schemas."""
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, field_validator

from app.models.user import SubscriptionPlan, UserRole


class UserBase(BaseModel):
    """Shared user fields."""
    email: EmailStr
    full_name: str


class UserCreate(UserBase):
    """Schema for creating a new user."""
    password: str

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        """Enforce minimum password requirements."""
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters long")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain at least one digit")
        return v

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        """Validate full name is not empty."""
        v = v.strip()
        if not v:
            raise ValueError("Full name cannot be empty")
        return v


class UserRead(UserBase):
    """Schema for reading user data (public-safe)."""
    id: int
    role: UserRole
    subscription_plan: SubscriptionPlan
    is_active: bool
    is_email_verified: bool
    avatar_url: Optional[str] = None
    bio: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class UserUpdate(BaseModel):
    """Schema for updating user profile."""
    full_name: Optional[str] = None
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
