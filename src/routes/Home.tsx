import React from 'react';
import styled from "styled-components";
import { Footer, Header ,Hero} from '../components';
import GameList from "../components/GameList/GameList";



const Home = () => {
 

    return (
        <HomeSection>
            <div className="main-container">
                <Header/>
                <Hero/>
                <GameList/>
                <Footer/>
            </div>
        </HomeSection>
    )
    
}

export default Home

const  HomeSection = styled.section`
    background-color: var(--clr-primary-1);
   
    
    .main-container{
        

    }
    

`