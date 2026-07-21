"""User service — business logic for user management."""
from typing import Optional

from passlib.context import CryptContext
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserService:
    """Handles all user-related database operations."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def get_by_id(self, user_id: int) -> Optional[User]:
        """Retrieve a user by their primary key."""
        result = await self.db.execute(select(User).where(User.id == user_id))
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str) -> Optional[User]:
        """Retrieve a user by their email address."""
        result = await self.db.execute(
            select(User).where(User.email == email.lower())
        )
        return result.scalar_one_or_none()

    async def create(self, user_in: UserCreate) -> User:
        """Create a new user with a hashed password."""
        hashed_pw = pwd_context.hash(user_in.password)
        user = User(
            email=user_in.email.lower(),
            full_name=user_in.full_name.strip(),
            hashed_password=hashed_pw,
        )
        self.db.add(user)
        await self.db.flush()  # Get ID without committing
        await self.db.refresh(user)
        return user

    async def update(self, user: User, updates: UserUpdate) -> User:
        """Update user profile fields."""
        update_data = updates.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(user, field, value)
        await self.db.flush()
        await self.db.refresh(user)
        return user

    async def deactivate(self, user: User) -> User:
        """Soft-delete a user by deactivating their account."""
        user.is_active = False
        await self.db.flush()
        return user

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """Verify a plain password against its hash."""
        return pwd_context.verify(plain_password, hashed_password)

    def hash_password(self, password: str) -> str:
        """Hash a plain password."""
        return pwd_context.hash(password)
