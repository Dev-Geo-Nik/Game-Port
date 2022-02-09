
import { Link } from 'react-router-dom';
import { useGameContext } from '../../context/Games/GameContext';








const GameList = () => {
  const {state:{Games}} = useGameContext();
   
  
    
    let displayGames = null;


    if(Games?.length){

        displayGames = Games.map((game=>{
          const {id,title,thumbnail,genre,short_description} = game;
          const link = `/game/${id}`;

            return <li key={id}> 
                        <Link to={link}>
                          <img src={thumbnail} alt={title} />
                          <h2>{title}</h2>
                          <p>{short_description}</p>
                          <p>{genre}</p>
                      </Link>
                  </li>
    
        }))

    }
    
   

    return  (
            <section>
              <ul>
                {displayGames}           
              </ul>
            </section>
            )
};

export default GameList;


