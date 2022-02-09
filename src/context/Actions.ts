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


export const API_KEY = 'e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2';
export const API_HOST = "free-to-play-games-database.p.rapidapi.com";