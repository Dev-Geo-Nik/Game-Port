import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGameContext } from '../../../context/Games/GameContext';
import { FaWindows } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { ActionTypes } from '../../../context/Actions';







const  GameCard :React.FC = () => {
  
  const {state:{Games,genre:stateGenre,platform:statePlatform },dispatch} = useGameContext();
  
     const onClickHandler = (id:number) => {
       
        dispatch({type:ActionTypes.FETCH_GAME_ID,payload:id});
    }



    let displayGames :((JSX.Element|null)[] | [])  = [];

    if (Games.length) {
        displayGames = Games.map((game)=>{
          const {id,title,thumbnail,short_description,genre:gameGenre,platform:gamePlatform} = game;
                
                

                if (statePlatform == "Browser" && gamePlatform == "PC (Windows)" ) {
                        return null;
                }

                if (statePlatform == "PC" && gamePlatform == "Web Browser" ) {
                  return null;
                }
                
                if(stateGenre !== "All Genres" && stateGenre !== gameGenre) {
                  return null;
                }
                
                
               

          return(
                <Link  to={`/game/${id}`}   className="list-container" key={id} onClick={()=>onClickHandler(id)}>
                      <img src={thumbnail} alt={title} className="img" />
                       <h3 className="title text general">{title}</h3>
                       <p className="description-text text general">{short_description}</p>
                       <div className="icons-container general">
                         <p className="free-text icon-text">Free</p>
                         <p className="genre-text icon-text">{gameGenre}</p>
                          {gamePlatform == "PC (Windows)" ? <FaWindows className="windows-icon "/>:<GoBrowser className="windows-icon "/>}
                         
                       </div>
                </Link>
          )

          
          

        })
    }
    
    

      return (
    <GameCardElement >
       <ul className="container">
         
          {displayGames.every(element => element === null) ? <h2 className="no-games-text">There is no game with these filters please try again !</h2> :displayGames} 
          
       </ul>
    </GameCardElement >
    );
};

export default GameCard;


const GameCardElement = styled.section`
    margin: 0  var(--margin-x);
    padding-top:8rem;

    .container{
      display: grid;
        grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
        gap: 4rem;
    }

    .list-container{
      border: 2px solid var(--clr-primary-1);
      background:var(--clr-primary-2); 
      color:var(--clr-text-1);
      transition: var(--transition);
      border-radius: 2px;
    }


    
    .list-container:hover{
      border: 2px solid #fff;
      /* transform: scale(1.01); */
     

    }

    .img{
      width:100%;
    }

    .title{
      font-size:2.2rem;
    

    }

    .description-text{
      font-size:1.6rem;
   
    }

    .text{
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icons-container{
      display: flex;
      align-items: center;
      font-size: 2rem;
     
    }


    .free-text {
      background-color: var(--clr-primary-3);
      color:#fff;
    
    }

    .genre-text{
      background-color: var(--clr-primary-1);
      margin: 0 2rem 0 auto;
      
    }

    .general{
      padding: 1.5rem;
    }


    .icon-text{
      padding: 0  1rem;
      border-radius: 2px;
    }
    
    .no-games-text{
    font-size:2.5rem;
    color: #fff;
    }

`