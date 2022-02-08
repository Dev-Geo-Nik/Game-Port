import React, { useState ,useEffect} from 'react';
import { Game } from '../../util/Types';
import { GameCard } from './GameCard/GameCard';
import {API_KEY,API_HOST} from "../../util/Constants";


// interface Props {
//   error?:string
//   games?:Game[]
// }


// const GameList = ({error,games}:Props) => {
const GameList = () => {

    // const [currentGames,setGames] = useState<Game[]>([]);
    // const [err,setErr] = useState("")

    // useEffect(() =>{
    //   fetchGames();
    // },[])

 

    // const fetchGames = async  () =>{
    
     

    //   try {
    
    
    //       const res = await fetch(`https://${API_HOST}/api/games?platform=browser`, {
    //         "method": "GET",
    //         "headers": {
    //           "x-rapidapi-host": API_HOST,
    //           "x-rapidapi-key": API_KEY,
    //         }
    //       });
       
    //        if (res.status >= 200 || res.status <= 299 ) {
    //            const data = await res.json();
    //           setGames(data)
    //           //  dispatch({type:LOAD_ALL_COINS ,payload:data});
    //        }
    //    } catch (error) {
    //            console.log(error)

    //            if ( typeof error === "string") {
    //              setErr(error)
                 
    //            }

    //            //  setLoading(true);
    //    }
    
    // }

    // if (error) {
    //     return <p>Unable to fetch games</p>
    // }
    
    // let displayGames:{}|null = null;


    // if(currentGames?.length){

    //     displayGames = currentGames.map((game=>{
    //       const {id} = game;
    //         return <li key={id}> 
    //                     <GameCard content ={game}/>
    //               </li>
    
    //     }))

    // }
    
   

    return  (
            <section>
              <ul>
                
                
              </ul>
            </section>
            )
};

export default GameList;


