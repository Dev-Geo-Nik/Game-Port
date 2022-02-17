


import styled from "styled-components"
import GamesAdded from './GamesAdded/GamesAdded';
import MostPlayed from './MostPlayed/MostPlayed';







const GameList = () => {
  
   
  
    
   
    
  //  console.log(genreCategories)

    return  (
            <GameListDiv>
              <div className="container">
                 <GamesAdded/>  
                 <MostPlayed/>
              </div>
            </GameListDiv>
            )
};

export default GameList;




const GameListDiv = styled.div`
      .container{
        display: flex;
        /* margin: 0  var(--margin-x);  */
        justify-content: center;
       

      }
     

    

     
`