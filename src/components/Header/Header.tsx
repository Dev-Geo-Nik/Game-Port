import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {GiMagicPortal} from "react-icons/gi";
const Logo : string = require("../../assets/logo.png");



const Header = () => {
    const {pathname} = useLocation()
  
  return (
       
          <HeaderNav>
            <ul className="list-container">
                
                <Link to="/" className="logo-container">
                  <img src={Logo} alt="" className="logo" />
                  <span className="logo-text ">Game Portal</span>
                </Link>    
                <Link to="/"className = {pathname === "/"? "game-link link-item active":"game-link link-item"}>Game List</Link> 
                {/* <Link to="/" className= {pathname === "/" ?"home-link link-item active":"home-link link-item"}>Home</Link> */}
              
                
            </ul>
          </HeaderNav>
      
  )
}

export default Header


const HeaderNav = styled.nav`
    margin: 0  var(--margin-x);
    padding: 2rem 0;
  /* border: 1px solid #000; */


  .list-container{
    display:flex;
    align-items:center;
    
  }

  .logo-container{
    display:flex;
    align-items:center;
    /* flex-direction:column; */
    /* border:1px solid var(--clr-text-1) */
  }

  .logo{
    
    width:6rem;
    height: 6rem;
    border-radius: 50%;
  }
  
  .logo-text{
    color:#fff;
    font-size:1.6rem;
    font-weight:bold;
    letter-spacing:2px;
    margin-left:0.5rem;
    }

    .game-link{
      /* color:var(--clr-text-1); */
      margin:0 2rem 0 auto;
      
    }
    .link-item{
      color:var(--clr-text-1);
      transition:var(--transition);
      font-size:1.6rem;
      padding: 1rem;
    }
    
    //General styles
    .home-link{
    
    
      
    }  

    .link-item:hover{
      color:#fff;
      background: var(--clr-primary-3);
      padding: 1rem;
    }
  
    .active{
      background: var(--clr-primary-3);
      padding: 1rem;
      color: #fff;
    }

`