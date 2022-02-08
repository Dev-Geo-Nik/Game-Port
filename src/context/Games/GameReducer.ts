import{Game} from "../../util/Types";
import {Action, AppState} from "./GameContext";
import {Actions} from "../Actions";




export const reducer = (state:AppState,action:Action)=>{
    const {type,payload} = action;

    if (type === Actions.FETCH_ALL_GAMES) {
        return({...state,Games:payload });
    }
    return state;
    // throw new Error ("No matching action found!");
}