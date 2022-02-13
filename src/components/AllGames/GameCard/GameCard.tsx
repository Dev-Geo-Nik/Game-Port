import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGameContext } from '../../../context/Games/GameContext';
import { FaFirefox, FaWindows } from "react-icons/fa";

const  GameCard :React.FC = () => {
    const {state:{Games}} = useGameContext();

    let displayGames :(JSX.Element[] |null) = null;

    if (Games.length) {
        displayGames = Games.map((game)=>{
          const {id,title,thumbnail,short_description,game_url,genre,platform,publisher,developer,freetomage_profile_url} = game;
            console.log(platform)
           
          return(
                <Link  to={`/game/${id}`} className="list-container" key={id}>
                      <img src={thumbnail} alt={title} className="img" />
                       <h3 className="title">{title}</h3>
                       <p className="description-text">{short_description}</p>
                       <div className="icons-container">
                         <p className="free-text icon-text">Free</p>
                         <p className="genre-text icon-text">{genre}</p>
                          {platform == "PC (Windows)" ? <FaWindows className="windows-icon icon-text"/>:<FaFirefox className="windows-icon icon-text"/>}
                         
                       </div>
                </Link>
          )
        })
    }

      return (
    <GameCardElement >
       <ul className="container">
          {displayGames}
       </ul>
    </GameCardElement >
    );
};

export default GameCard;


const GameCardElement = styled.section`
    margin: 0  var(--margin-x);
    padding-top:20rem;

    .container{
      display: grid;
        grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
     
        gap: 5rem 10rem;
    }

    .list-container{
      color:var(--clr-text-1);
    }

`