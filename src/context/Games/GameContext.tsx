import React,{ChangeEvent, createContext,Dispatch,ReactNode,useContext,useEffect,useReducer} from 'react';



import { Action, Game ,ActionTypes,FetchAllGamesUrl,FetchDataParams, SingleGameType} from '../Actions';
import { reducer } from './GameReducer';



type Platforms = "All Platforms" |  "Browser" | "PC"
    




  //Both must have the same

  export interface State {
      Games: Game[];
      SingleGame :SingleGameType | null;
      gameID : number
      platform: Platforms;
      genre: string;
      
  }

  const initialState : State = {
      Games: [],
      SingleGame:null,
      gameID:1,
      platform:"All Platforms",
      genre:"All Genres",
      
     

  }


 type ContextHook = () =>{
    state:State,
    dispatch:(action:Action) => void,
   
    
}

const  gameContext =  createContext<{
  state:State;
  dispatch:Dispatch<Action>;
  
}>({
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
      fetchData(FetchAllGamesUrl,FetchDataParams,ActionTypes.FETCH_ALL_GAMES);
 

    },[])



    useEffect(()=>{
      fetchSingleGame(state.gameID)
      
    },[state.gameID])
    
    // setLoading(false);



       const fetchSingleGame = async (id:number) => {
      try {
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, FetchDataParams);

        if (res.status >= 200 || res.status <= 299 ) {
            const data = await res.json();
            // console.log(data)
            dispatch({type:ActionTypes.FETCH_SINGLE_GAME,payload:data});            
        }
    } catch (error) {
            console.log(error)
            //  setLoading(true);
            
    }
  }


    

   

    const fetchData = async  (link:string,params:{},type:ActionTypes) =>{

   

      try {
          const res = await fetch(link, params);
  
           if (res.status >= 200 || res.status <= 299 ) {
               const data = await res.json();
              // console.log(data)
               dispatch({type:type,payload:data});            
           }
       } catch (error) {
               console.log(error)
               //  setLoading(true);
       }
  
    }


  


    return (
      <gameContext.Provider
        value={{
          state,
          dispatch
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
  


  