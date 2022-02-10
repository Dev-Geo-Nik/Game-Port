import { Action } from "../Actions";
import { State } from "./GameContext";

type ReducerType = (state: State, action: Action) => State;



export const reducer: ReducerType = (state, action) => {

    if (action.type === "FETCH_ALL_GAMES"){   
        console.log("fetching")
        return({...state,Games:action.payload });
    }

    console.log("no changes to state")
    return state;
  };