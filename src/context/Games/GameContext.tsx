import React,{
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useEffect,
    useReducer,
  } from 'react';


  import { Action, API_HOST, API_KEY, Game } from '../Actions';
import { reducer } from './GameReducer';


  //Both must have the same

  export interface State {
      Games: Game[];
  }

  const initialState : State = {
      Games: []

  }


type ContextHook = () =>{
    state:State,
    dispatch:(action:Action) => void
}

const  gameContext =  createContext<{state:State;dispatch:Dispatch<Action>;}>({
    state:initialState,
    dispatch: ()=>{}
})



export const GameContextProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);



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
              // console.log(data)

               dispatch({type:'FETCH_ALL_GAMES',payload:data});
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
      <gameContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </gameContext.Provider>
    );
};


// Custom context hook
export const useGameContext: ContextHook = () => {
    const { state, dispatch } = useContext(gameContext);
    return { state, dispatch };
  };
  