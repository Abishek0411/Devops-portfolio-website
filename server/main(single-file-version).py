from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load .env vars
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")

# DB Setup
client = MongoClient(MONGO_URI)
db = client["blog"]
collection = db["posts"]

# FastAPI app
app = FastAPI()

# CORS (allow all for now)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model
class BlogPost(BaseModel):
    title: str
    content: str
    author: Optional[str] = "Abishek"

# Routes
@app.get("/posts", response_model=List[BlogPost])
def get_posts():
    posts = list(collection.find({}, {"_id": 0}))
    return posts

@app.post("/posts")
def create_post(post: BlogPost):
    collection.insert_one(post.model_dump())
    return {"msg": "Post created"}

@app.put("/posts/{title}")
def update_post(title: str, updated_post: BlogPost):
    result = collection.update_one(
        {"title": title},
        {"$set": updated_post.model_dump()}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post updated successfully"}

@app.delete("/posts/{title}")
def delete_post(title: str):
    result = collection.delete_one({"title": title})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}
