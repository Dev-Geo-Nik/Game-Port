import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ActionTypes } from '../../../context/Actions';
import { useGameContext } from '../../../context/Games/GameContext';


const MostPlayed = () => {
  const {state:{Games},dispatch} = useGameContext();


  const onClickHandler = (id:number) => {
       
    dispatch({type:ActionTypes.FETCH_GAME_ID,payload:id});
}

  let displayGames = null;

        if (Games.length) {

          displayGames =Games.slice(16,30).map((game)=>{
            const {id,title,thumbnail,genre,short_description,platform} = game;
            

            return <li key={id} className="list-container"> 
                      <Link to={`/game/${id}`} className="link" onClick={()=>onClickHandler(id)}>
                          <img src={thumbnail} alt={title} className="image" />  
                            <p className="free-tag">Free</p>
                      </Link>
                  </li>

          })
        }

  return (
    <MostPlayedSection>
      <h2 className="title-text">Most played Today</h2> 
      <ul className="container">
         {displayGames}
      </ul>
    </MostPlayedSection>
  )
}

export default MostPlayed

const MostPlayedSection = styled.section`

    margin-left: 2rem;

    .title-text{
      font-size:2.5rem;
        color: var(--clr-text-1);
        margin-bottom: 1.6rem;
    }

    

    .list-container{
      position: relative;
      transition: var(--transition);
      border: 2px solid var(--clr-primary-1);

    }
    .list-container:hover{
      border: 2px solid  #fff;
      transform: scale(1.02);

    }

    .free-tag{
      position: absolute;
      bottom: 5%;
      right:5%;
      background-color:var(--clr-primary-3);
      padding: 0.8rem;
      color:#fff;
      font-size: 1.6rem;
    }

    li:not(:last-child){
      margin-bottom: 2rem;

    
    }
    .link{
     display: inline-block;
      
    }

    
`