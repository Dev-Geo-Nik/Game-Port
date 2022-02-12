import React,{ChangeEvent, createContext,Dispatch,ReactNode,useContext,useEffect,useReducer} from 'react';
import { Action, API_HOST, API_KEY, Game ,ActionTypes,FetchAllGames,FetchDataParams} from '../Actions';
import { reducer } from './GameReducer';



type Platforms = "All Platforms" |  "Browser" | "PC"
    




  //Both must have the same

  export interface State {
      Games: Game[];
      platform: Platforms;
      genre: string;
      onChangeHandler:(e:React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const initialState : State = {
      Games: [],
      platform:"All Platforms",
      genre:"Browser",
      onChangeHandler(e:React.ChangeEvent<HTMLSelectElement>){
         console.log(e)
      }

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
      fetchData(FetchAllGames,FetchDataParams,"FETCH_ALL_GAMES");
    
    },[])



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


  const test = ()=>{
    
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
  


  