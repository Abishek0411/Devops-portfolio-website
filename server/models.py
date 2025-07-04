from pydantic import BaseModel
from typing import Optional

class BlogPost(BaseModel):
    title: str
    content: str
    author: Optional[str] = None
    