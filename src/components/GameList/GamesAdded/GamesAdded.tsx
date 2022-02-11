import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGameContext } from '../../../context/Games/GameContext';
import { FaWindows } from "react-icons/fa";




const GamesAdded = () => {
    const {state:{Games}} = useGameContext();

    let displayGames = null;

    
 
    
    if(Games?.length){

        displayGames = Games.slice(0,15).map((game=>{
          const {id,title,thumbnail,genre,short_description,platform} = game;
          const link = `/game/${id}`;

            

            return <li key={id} className="list-container"> 
                        <div  className="link">
                          <img src={thumbnail} alt={title}  className="image"/>
                          <div className="text-container">
                             <h2 className="title">{title}</h2>
                             <p className="text-description">{short_description}</p>
                             <div className="icons-container">
                                <p className="genre icons">{genre}</p>
                                <FaWindows className="windows-icon "/>
                                <Link to={link} className="btn btn-link">LEARN MORE</Link>
                                <p className="free-tag icons">Free</p>
                             </div>
                          </div>

                      </div>
                  </li>
    
        }))

    }


  return (
    <GamesAddedSection>
        <h2 className="title-text">Recently Added</h2>
        <ul className="main-container">
            {displayGames}           
        </ul>
    </GamesAddedSection>
  )
}

export default GamesAdded


const GamesAddedSection = styled.section`

    .title-text{
        font-size:2.5rem;
        color: var(--clr-text-1);
    }

    .list-container{
        border: 2px solid var(--clr-primary-1);

        background:var(--clr-primary-2); 
        padding:2rem;
        margin: 1.5rem 1.5rem 1.5rem 0;
        /* border: 1rem solid var( --clr-primary-2); */
        
   
    }

    .list-container:hover{
        transform: scale(1.01);
        border: 2px solid #fff;

    }

    .link{
        /* background:yellow; */
        display: flex;
        
    }

    .image{
        width:25rem;
        height:15rem;
       
    }

    .text-container{
        margin-left: 2rem;
        color:var(--clr-text-1);
        width:100%;
    }

    .title{
        margin: 2rem 0;
        font-size:2.5rem;
    }

    .text-description{
        font-size:1.5rem;
        overflow:hidden;
        text-overflow: ellipsis;
    }


    .icons-container{
        display: flex;
        margin-top: 3rem;
        align-items:center;
        /* background: red; */
    }
    
    .icons{

        background: var(--clr-primary-1);
        font-size:1.5rem;
        padding:1rem;
        border-radius:2px;
        
    }
    .genre{
    }

    .windows-icon{
        margin:  0 2rem 0 auto;
        font-size:2rem;
        /* background: var(--clr-primary-1); */
    }

    .free-tag{
        background: var(--clr-primary-3);
        
        color: #fff;
    }


    .btn-link{
        background: var(--clr-primary-3);
        margin: 0 3rem;
        padding: 1.1rem 2rem;
        font-size:1.5rem;
    }


    .btn-link:hover{
        background: var(--clr-primary-4);
        color: var(--clr-primary-1);
    }
`