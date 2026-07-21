"""SQLAlchemy declarative base and metadata."""
from sqlalchemy.orm import DeclarativeBase, declared_attr


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM models."""

    @declared_attr.directive
    @classmethod
    def __tablename__(cls) -> str:
        """Automatically derive table name from class name (snake_case plural)."""
        import re
        name = re.sub(r'(?<!^)(?=[A-Z])', '_', cls.__name__).lower()
        return f"{name}s"

    def __repr__(self) -> str:
        """Default repr showing class name and primary key."""
        pk = getattr(self, 'id', None)
        return f"<{self.__class__.__name__} id={pk}>"


# Import all models here so Alembic can discover them
from app.models.user import User  # noqa: F401, E402
