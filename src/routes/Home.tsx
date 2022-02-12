import React from 'react';
import styled from "styled-components";
import { Footer, Header ,Hero} from '../components';
import GameList from "../components/GameList/GameList";



const Home = () => {
 

    return (
        <HomeSection>
            
                <Header/>
                <Hero/>
                <GameList/>
                <Footer/>
         
        </HomeSection>
    )
    
}

export default Home

const  HomeSection = styled.section`
    background-color: var(--clr-primary-1);
   
    
    .main-container{
        

    }
    

`