import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const image : string = require("../../assets/hero.jpg");


const Hero = () => {
         return (
        <HeroDiv>
            <div className="hero-text-container"> 
                 <h1 className="hero-title">Find & track the best  <span className="hero-title-span">free-to-play </span> games!</h1>
                 <p className="sub-title">Track what you've played and search for what to play next!</p>
                 <Link  to="/games" className="btn btn-cta">GET STARTED ITS FREE</Link>
            </div>         
                <img src={image} alt="hero image" className="hero-image" />
        </HeroDiv>
  )
}

export default Hero

const HeroDiv = styled.div`
    
    position: relative;
    
    .hero-text-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        /* color:var(--clr-text-1); */
        color:#fff;
        
    }

    .hero-title{
       font-size:4rem;
       
       
    }

    .hero-title-span{
        color:var(--clr-primary-3);
    }

    .sub-title{
        font-size: 2.5rem;
        margin: 2rem 0 4rem 0;

    }

    .hero-image{
    
        height: 50rem;
        width: 100%;
        opacity: 0.24;
       
        
       
        
    }

    .btn-cta{
        background: var(--clr-primary-3);
        padding: 1.5rem 1.5rem;
        font-size: 1.5rem;
         border-radius: 4px;
         transform: var(--transition);
    }


    .btn-cta:hover{
         
         background: var(--clr-primary-4)
        
    }

`