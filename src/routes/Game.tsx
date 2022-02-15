import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from '../components';

import SingleGameCard from '../components/SingleGame/SingleGameCard/SingleGameCard';
import SingleGameComponent from '../components/SingleGame/SingleGameComponent';

const  Game :React.FC = () => {

  return (
<GameElement >
    <Header/>
    <hr className="break"/>
    <SingleGameComponent/>
    <SingleGameCard/>
    <Footer/>
</GameElement >
);
};

export default Game;


const GameElement = styled.div`
    background-color: var(--clr-primary-1);


    .break{
     height:0.01rem;
     background: #000;
     border:none;
  }
`