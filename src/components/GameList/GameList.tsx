


import styled from "styled-components"
import GamesAdded from './GamesAdded/GamesAdded';
import MostPlayed from './MostPlayed/MostPlayed';







const GameList = () => {
  
   
  
    
   
    
  //  console.log(genreCategories)

    return  (
            <GameListDiv>
                 <GamesAdded/>  
                 <MostPlayed/>
             
            </GameListDiv>
            )
};

export default GameList;




const GameListDiv = styled.div`
      margin: 0  var(--margin-x);
      display: flex;
     
`