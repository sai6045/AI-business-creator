"""User endpoints — stub for future authentication implementation."""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.user import UserCreate, UserRead
from app.services.user_service import UserService

router = APIRouter()


@router.post(
    "/",
    response_model=UserRead,
    status_code=status.HTTP_201_CREATED,
    summary="Create User",
    description="Register a new user account. (Stub — authentication coming soon)",
)
async def create_user(
    user_in: UserCreate,
    db: AsyncSession = Depends(get_db),
) -> UserRead:
    """Create a new user."""
    service = UserService(db)
    existing = await service.get_by_email(user_in.email)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A user with this email already exists.",
        )
    user = await service.create(user_in)
    return UserRead.model_validate(user)


@router.get(
    "/{user_id}",
    response_model=UserRead,
    summary="Get User",
    description="Retrieve a user by ID. (Stub — authentication coming soon)",
)
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
) -> UserRead:
    """Get a user by ID."""
    service = UserService(db)
    user = await service.get_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )
    return UserRead.model_validate(user)
