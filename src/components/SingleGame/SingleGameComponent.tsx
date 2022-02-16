import  React from 'react';
import styled from 'styled-components';
import { useGameContext } from '../../context/Games/GameContext';
import { FaWindows } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import { ActionTypes } from '../../context/Actions';
import { Link } from 'react-router-dom';
import { GoLinkExternal } from "react-icons/go";


const  SingleGameComponent :React.FC = () => {

    const {state:{gameID,SingleGame,Games},dispatch} = useGameContext();
     let displayGame:(JSX.Element|null) = null;


    console.log(SingleGame);
    
    
    const onClickHandler = (id:number) => {

      dispatch({type:ActionTypes.FETCH_GAME_ID,payload:id});
  }


    // Object.entries(SingleGameData).
    if(SingleGame != null){
      
      const {id,title,thumbnail,status,short_description,description,game_url,genre,platform,publisher,release_date,screenshots,developer}  = SingleGame;

      let counter = 0;
      let displaySimilarGames =  Games.map((game)=>{
        const {id:gameID,title:gameTitle,thumbnail:gameThumbnail,short_description,genre:gameGenre,platform:gamePlatform} = game;

          if( counter > 4){
              return;
          }

          if (gameTitle != SingleGame.title && gameGenre === SingleGame.genre && counter < 4) {
                counter++;
              return(
                <Link  to={`/game/${gameID}`}   className="similar-game-container" key={gameID} onClick={()=>onClickHandler(gameID)}>
                       <img src={gameThumbnail} alt={gameTitle} className="similar-game-image" />
                  </Link>
              )
          }

          return;
      })

     displayGame  =  (

                <div className = "main-container" key = {id}>
                      <div className="game-container">
                          <img src={thumbnail} alt={title} className="game-image" /> 
                           <a href = {game_url}   target="_blank" className="btn game-link-btn"> PLAY NOW <GoLinkExternal className = "link-icon"/> </a>
                      </div>
                      <div className="text-container">
                         <h1 className="title">{title}</h1>
                         <p className="about sub-title">About {title} </p>
                         <p className="main-description">{description}</p>
                          <p className="screenshots-text sub-title">{title} screenshots</p>
                          <div className="screenshots-container">
                             {screenshots.map((img)=>{
                               return  (
                                 
                                 <img  src={img.image} alt={title} className={`screenshots screenshots-${img.id}`} key={img.id} /> 
                                )
                             })}
                          </div>
                          <p className="more-info sub-title">Additional Information</p>
                          <div className="additional-info-container">
                              <div className="additional-info-box">
                                  <div className="box-title">
                                    <label htmlFor="title" className="label">Title</label>
                                    <p className="text-general">{title}</p>
                                  </div>
                                  <div className="box-developer">
                                    <label htmlFor="developer" className="label">Developer</label>
                                    <p className="text-general">{developer}</p>
                                  </div>
                                  <div className="box-date">
                                    <label htmlFor="date" className="label">Release Data</label>
                                    <p className="text-general">{release_date}</p>
                                  </div>
                                  <div className="box-genre">
                                    <label htmlFor="genre" className="label">Genre </label>
                                      <p className="text-general">{genre}</p>
                                   
                                  </div>
                                  <div className="box-platform">
                                    <label htmlFor="platform" className="label">Platform</label>
                                    <p className='text-general '>{platform == "PC (Windows)" ? <span className="label icons-container"> PC<FaWindows className="icons"/></span>: <span className ="text-platform icons-container">Browser<GoBrowser className="icons"/></span>}</p>
                                  </div>
                              </div>       
                          </div>
                          <p className="sub-title similar-title">Games like {title}</p>
                          <div className="similar-games-container">
                              {displaySimilarGames}
                          </div>
                      </div>

                </div>
                     )
    }

  

  return (
  <SingleGameComponentElement >
      {displayGame}
    
  </SingleGameComponentElement >
);
};

export default SingleGameComponent;


const SingleGameComponentElement = styled.div`
  
  .main-container{   
    display: flex;  
    flex-direction: column;
     margin: 10rem  var(--margin-x); 
    color: #fff;
  }

  

  .text-container{
    margin-left: 4rem;
  }

  .title{
       font-size: 3rem;
       color:var(--clr-primary-3);
  }



  .main-description{
    font-size:1.8rem;
    letter-spacing: 2px;
 
  }


    .screenshots-container{
      display: grid;
        grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
        gap: 4rem;
    }

    .screenshots{
      width: 28rem;
      
    }

   
    
    .sub-title{
      color: var(--clr-text-1);
      font-size:2rem;
      margin: 8rem 0 3rem 0;

    }

    .additional-info-box{
      display: grid;
        grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    }

    .label{
      font-size:1.8rem;
      color: var(--clr-text-1);
    }
  

    .text-general{
      font-size:1.6rem;
      margin-top: 1rem;
    }

    .icons{
    
        font-size:1.6rem;
        margin-left: 0.5rem;
    }

    .icons-container{
      display: flex;
      align-items: center;
    }

    .similar-title{
      /* margin-top:8rem; */
    }

    .similar-games-container{
      
      display: grid;
        grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
        gap:2rem 1rem;
     
       
    }
  

    .similar-game-container{
      border:2px solid var(--clr-primary-1);
        transition:var(--transition);
    }
    .similar-game-container :hover{
      border:2px solid #fff;
    }
    .similar-game-image{
      width: 100%;
    }


    .game-container{
      text-align: center;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 5rem;
     
    }

    .game-image{
      
    }

    .game-link-btn{
      display: flex;
      justify-content: center;
      align-items:center;
      background: var(--clr-primary-3);
      padding: 1.8rem 11.3rem;
      font-size: 2rem;
      margin-top: 2rem;
      
      transition: var(--transition);
      
    }

    .game-link-btn:hover{
      background: var(--clr-primary-4);
    }


   
    
    .link-icon{
      margin-left: 0.5rem;
    }

`