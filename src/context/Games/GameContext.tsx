import React,{createContext,useEffect,useReducer} from 'react';
import {Actions} from "../Actions";
import{Game} from "../../util/Types";
import { reducer } from './GameReducer';
import { API_HOST, API_KEY } from '../../util/Constants';

export type AppState = typeof initialState;
export type Action = {type:Actions,payload:{}}

const initialState = {
    Games:[],
    greenings:"hi"
} 

interface ProviderProps {
    children: React.ReactNode
}


export const GamesContext = createContext<{
    state: AppState;
    dispatch:React.Dispatch<Action>
}>({state:initialState,dispatch:(payload:{})=>{}});





export function GamesProvider  ({children}:ProviderProps){
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetchGames();
    },[])


    
    const fetchGames = async  () =>{
    
     

        try {
      
      
            const res = await fetch(`https://${API_HOST}/api/games?platform=browser`, {
              "method": "GET",
              "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY,
              }
            });
         
             if (res.status >= 200 || res.status <= 299 ) {
                 const data = await res.json();
                

                 dispatch({type:Actions.FETCH_ALL_GAMES,payload:data})
                //  dispatch({type:LOAD_ALL_COINS ,payload:data});
             }
         } catch (error) {
                 console.log(error)
  
                //  if ( typeof error === "string") {
                //    setErr(error)
                   
                //  }
  
                 //  setLoading(true);
         }

}

    return (
        <GamesContext.Provider value = { {state,dispatch}}>
             {children}
        </GamesContext.Provider>
    )
} 

