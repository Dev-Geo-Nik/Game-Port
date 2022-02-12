import React from 'react'
import styled from 'styled-components';
import { useGameContext } from '../../../context/Games/GameContext';
import {platforms,genreCategoriesBrowser,genreCategoriesPC,genreAllCategories} from "../../../context/Actions";




const Filters = () => {
  const {state:{Games,onChangeHandler}} = useGameContext();
     
      
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

      const onChangeHandlerX = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        console.log(e)
      }

  return (
         <FiltersDiv>
             <h2 className="title">Best Free to Play Games for PC and Browser in {new Date().getFullYear()}!</h2>
             <p className="sub-title"> <span className="games-number">{Games.length}</span> free-to-play games found in our list!</p>
             <form className="filters-container">
                  <label htmlFor="platform" className="platforms-label">Platform 
                    <select name="platform" id="platform" className="platform-select" onChange = {(e)=>onChangeHandler(e)}>
                        {displayPlatforms}
                    </select>
                  </label>
                  <label htmlFor="genre" className="genre-label">Genre 
                    <select name="genre" id="genre" className="genre-select">
                        {displayGenre}
                    </select>
                  </label>
             </form>

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

    .games-number{
      color:var(--clr-primary-3);
      font-weight: bold;
    }


    

`