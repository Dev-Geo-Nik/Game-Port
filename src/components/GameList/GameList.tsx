
import { Link } from 'react-router-dom';
import { useGameContext } from '../../context/Games/GameContext';
import styled from "styled-components"







const GameList = () => {
  const {state:{Games}} = useGameContext();
   
  
    
    let displayGames = null;
    const genreCategories :string[] = [];
    console.log(Games.length)
    if(Games?.length){

        displayGames = Games.map((game=>{
          const {id,title,thumbnail,genre,short_description,platform} = game;
          const link = `/game/${id}`;

            // console.log(platform)
                // if (!genreCategories.includes(genre)) {
                //       genreCategories.push(genre);
                // }

            return <li key={id}> 
                        <Link to={link}>
                          <img src={thumbnail} alt={title} />
                          <h2 className="title">{title}</h2>
                          <p>{short_description}</p>
                          <p>{genre}</p>
                      </Link>
                  </li>
    
        }))

    }
    
  //  console.log(genreCategories)

    return  (
            <GameListDiv>
                  <ul>
                    {displayGames}           
                  </ul>
            </GameListDiv>
            )
};

export default GameList;




const GameListDiv = styled.div`
      margin: 0  var(--margin-x);
      
     
`