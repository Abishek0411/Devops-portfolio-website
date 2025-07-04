from fastapi import APIRouter, HTTPException
from models import BlogPost
from database import collection

router = APIRouter()

@router.get("/posts")
def get_posts():
    return list(collection.find({}, {"_id" : 0}))

@router.post("/posts")
def create_post(post: BlogPost):
    collection.insert_one(post.model_dump())
    return {"message": "Post created successfully"}

@router.put("/posts/{title}")
def update_post(title: str, updated_post: BlogPost):
    result = collection.update_one(
        {"title": title},
        {"$set": updated_post.model_dump()}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post updated successfully"}

@router.delete("/posts/{title}")
def delete_post(title: str):
    result = collection.delete_one({"title": title})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}
