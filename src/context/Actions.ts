export enum ActionTypes  {
    FETCH_ALL_GAMES = "FETCH_ALL_GAMES",
    FETCH_SINGLE_GAME = "FETCH_SINGLE_GAME",
    CHANGE_PLATFORM_FILTER = "CHANGE_PLATFORM_FILTER",
    CHANGE_PLATFORM_GENRE = "CHANGE_PLATFORM_GENRE"
}

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

export const platforms = [

    {
        value:"All Platforms",
        display: "All Platforms"
    },

    {
        value: 'Browser',
        display: "Browser (Web)"
    },
    {
        value: 'PC',
        display: "Windows (PC)"
    }
]






 export const genreAllCategories =[
    {
        value:"All Genres",
        display: "All Genres"
    },

    {
        value:"MMORPG",
        display: "MMORPG"
    },
    {
        value:"Card Game",
        display: "Card Game"
    },
    
    {
        value:"Strategy",
        display: "Strategy"
    },
    {
        value:"Shooter",
        display: "Shooter"
    },
  
    {
        value:"MMO",
        display: "MMO"
    },
    {
        value:"Social",
        display: "Social"
    },
  
    {
        value:"MOBA",
        display: "MOBA"
    },
  
    {
        value:"Fighting",
        display: "Fighting"
    },
  
    {
        value:"Racing",
        display: "Racing"
    },
    {
        value:"Sports",
        display: "Sports"
    },
    {
        value:"Battle Royale",
        display: "Battle Royale"
    },
  
    {
        value:"Action RPG",
        display: "Action RPG"
    },
  
    {
        value:"Card",
        display: "Card"
    },
    {
        value:"ARPG",
        display: "ARPG"
        
    }

 ]

export const API_KEY = 'e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2';
export const API_HOST = "free-to-play-games-database.p.rapidapi.com";


export const FetchAllGames = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
// export const FetchPcGames = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`;

export const FetchDataParams = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key":'e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2',
    }

 }

