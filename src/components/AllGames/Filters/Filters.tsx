import React from 'react'
import styled from 'styled-components';
import { useGameContext } from '../../../context/Games/GameContext';
import {platforms,genreAllCategories} from "../../../context/Actions";
import {ActionTypes} from "../../../context/Actions";



const Filters = () => {

  const {state:{Games,platform,genre} ,dispatch} = useGameContext();

      console.log(platform,genre)

      const displayPlatforms = platforms.map((platform)=>{
            return (
               <option key = {platform.value} value = {platform.value}>{platform.display}</option>
            )
      })

      const displayGenre = genreAllCategories.map((genre)=>{
            return (
               <option key = {genre.value} value = {genre.value}>{genre.display}</option>
            )
      })

      const onChangeHandlerPlatform = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        
          dispatch({type:ActionTypes.CHANGE_PLATFORM_FILTER,payload:e.target.value})
      }

      const onChangeHandlerGenre = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        
          dispatch({type:ActionTypes.CHANGE_PLATFORM_GENRE,payload:e.target.value})
      }



      // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      //   e.preventDefault()
      //   console.log("submitted")
      //  }


  return (
         <FiltersDiv>
             <h2 className="title">Best Free to Play Games for PC and Browser in {new Date().getFullYear()}!</h2>
             <p className="sub-title"> <span className="games-number">{Games.length}</span> free-to-play games found in our list!</p>
             <div className="container">
                  <label htmlFor="platform" className="platforms-label label"> <span className="label-text">Platform:</span> </label>
                    <select name="platform" id="platform" className="platform-select select" onChange = {onChangeHandlerPlatform}>
                        {displayPlatforms}
                    </select>
                 
                  <label htmlFor="genre" className="genre-label label"><span className="label-text">Genre:</span> </label>
                  <select name="genre" id="genre" className="genre-select select" onChange={onChangeHandlerGenre}>  
                    {displayGenre}  
                 </select>
                    
                  
             </div>
      
        </FiltersDiv>
  )
}

export default Filters


const FiltersDiv = styled.div`
    margin: 0  var(--margin-x);
    color:var(--clr-text-1);
    padding-top:8rem;
    
    
    .title{
      margin-bottom: 2rem;

    }

    .sub-title{
      font-size: 1.6rem;
    }

    .container{
        margin-top: 10rem;
        display: flex;
        align-items:center;
     
    }

    .games-number{
      color:var(--clr-primary-3);
      font-weight: bold;
    }


    .label{
      font-size:2rem;
      margin-right: 2rem;
    
    
   
    }

    
    .genre-label{
      margin-left: 2rem;

    }

    

`