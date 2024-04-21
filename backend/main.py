from fastapi import FastAPI

app = FastAPI()

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# [{'Tetris 99', 'A puzzle game'}, {'Among Us', 'An online multiplayer murder mystery game'}]
todo_list_games = [] # temporary storage

# class SteamGame extends/implements BaseModel
class SteamGame(BaseModel):
    name: str
    description: str

@app.get('/wishlist')
async def get_wishlist():
    return todo_list_games

@app.post('/add')
async def add_item(game: SteamGame):
    todo_list_games.append({'name': game.name, 'description': game.description})
    return {'message': 'success'}
