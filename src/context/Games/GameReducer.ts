import { Action, ActionTypes } from "../Actions";
import { State } from "./GameContext";

type ReducerType = (state: State, action: Action) => State;



export const reducer: ReducerType = (state, action) => {

 

    switch (action.type) {
        
        case ActionTypes.FETCH_ALL_GAMES:
            return({...state,Games:action.payload });
        case ActionTypes.CHANGE_PLATFORM_FILTER:
            return({...state,platform:action.payload})
            case ActionTypes.CHANGE_PLATFORM_GENRE :
            return({...state,genre:action.payload})
         case ActionTypes.FETCH_SINGLE_GAME :
             return({...state,SingleGame:action.payload})   
         case ActionTypes.FETCH_GAME_ID :
             return({...state,gameID:action.payload})   
        default:
            return state;
    }
 


 
  };