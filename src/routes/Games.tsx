import React from 'react'
import styled from 'styled-components';
import { Footer, Header  ,AllGames} from '../components';

const Games = () => {
  return (
         <GamesSection>
               <Header/>
               <hr className="break"/>
               <AllGames/>
               <Footer/>
        </GamesSection>
  )
}

export default Games;

const GamesSection = styled.section`
     background-color: var(--clr-primary-1);
    

  .break{
     height:0.01rem;
     background: #000;
     border:none;
  }

`

