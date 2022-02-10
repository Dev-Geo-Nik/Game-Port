export type ActionTypes = 'FETCH_ALL_GAMES' | 'FETCH_SINGLE_GAME';

export interface Action {
    type: ActionTypes;
    payload?: any;
}


export type Game = {
    id:number
    title:string
    thumbnail:string
    short_description:string
    game_url:string
    genre:string
    platform:string
    publisher:string
    developer:string
    release_date:string
    freetomage_profile_url:string
}

export const genreCategoriesBrowser = {
    MMORPG: "MMORPG",
    CardGame: "Card Game",
    Fantasy: "Fantasy",
    Strategy: "Strategy",
    Shooter: "Shooter",
    Social: "Social"
}


export const genreCategoriesPC = {
    MMORPG  : "MMORPG",
    Shooter: "Shooter",
    MMO: "MMO",
    Social: "Social",
    CardGame: "Card Game",
    MOBA: "MOBA",
    Fighting: "Fighting",
    Strategy: "Strategy",
    Racing: "Racing",
    Sports: "Sports",
    BattleRoyale: "Battle Royale",
    ActionRPG: "Action RPG",
    Card: "Card",
    ARPG: "ARPG",
    Moba: "Moba",
    Fantasy: "Fantasy"
 }

export const API_KEY = 'e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2';
export const API_HOST = "free-to-play-games-database.p.rapidapi.com";


export const FetchDataLinks = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`;

export const FetchDataParams = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key":'e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2',
    }

 }

