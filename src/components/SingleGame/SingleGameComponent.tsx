import  React from 'react';
import styled from 'styled-components';
import { useGameContext } from '../../context/Games/GameContext';
import {SingleGameType} from "../../context/Actions";
import { FaWindows } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';



const  SingleGameComponent :React.FC = () => {

    const {state:{gameID,SingleGame},dispatch} = useGameContext();
     let displayGame:(JSX.Element|null) = null;



    console.log(SingleGame)

    // Object.entries(SingleGameData).
    if(SingleGame != null){
   
      const {id,title,thumbnail,status,short_description,description,game_url,genre,platform,publisher,release_date,freetogame_profile_url,screenshots,developer}  = SingleGame;


     displayGame  =  (

                <div className = "main-container" key = {id}>
                      <div className="game-container">
                          <img src={thumbnail} alt={title} className="game-image" /> 

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
                              <div className="additional-info-box-1">
                                  <div className="box-title">
                                    <label htmlFor="title" className="label-title">Title</label>
                                    <p className="text-title">{title}</p>
                                  </div>
                                  <div className="box-developer">
                                    <label htmlFor="developer" className="developer">Developer</label>
                                    <p className="text-developer">{developer}</p>
                                  </div>
                                  <div className="box-date">
                                    <label htmlFor="date" className="date">Release Data</label>
                                    <p className="text-date">{release_date}</p>
                                  </div>
                                  <div className="box-genre">
                                    <label htmlFor="genre" className="genre">Genre </label>
                                      <p className="text-genre">{genre}</p>
                                   
                                  </div>
                                  <div className="box-platform">
                                    <label htmlFor="platform" className="platform">Platform</label>
                                    {platform == "PC (Windows)" ? <span className="text-platform"> PC<FaWindows className="windows-icon "/></span>: <span className ="text-platform">Browser<GoBrowser className="windows-icon "/></span>}
                                  </div>
                              </div>
                              <div className="additional-info-box-2"></div>
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
    /* background: var(--clr-primary-2); */
    /* padding:2rem; */
    /* margin-top:10rem; */
    display: flex;
   
     margin: 10rem  var(--margin-x);
    /* margin: 0  50rem; */
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
      margin: 2.5rem 0;

    }
  

  

`