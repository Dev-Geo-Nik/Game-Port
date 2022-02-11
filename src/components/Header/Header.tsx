import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiGamepadCross ,GiGameConsole,GiMagicPortal} from "react-icons/gi";


const Header = () => {
    
  return (
       
          <HeaderNav>
            <ul className="list-container">
                
                <Link to="/" className="logo-container">
                  <GiMagicPortal className="logo"/>
                  <span className="logo-text ">Game Portal</span>
                </Link>
                <Link to="/games" className="Game-list list-item">Game List</Link>
                <Link to="/trending" className="list-item">Trending Games</Link>
                
                
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
    font-size:4.5rem;
    color:var(--clr-primary-3);
  }
  
  .logo-text{
    color:#fff;
    font-size:1.6rem;
    font-weight:bold;
    letter-spacing:2px;
    margin-left:0.5rem;
    }

    .Game-list{
      /* color:var(--clr-text-1); */
      margin:0 2rem 0 auto;
      
    }
    
    //General styles
    .list-item{
      color:var(--clr-text-1);
      font-size:1.6rem;
      transition:var(--transition);
    }  

    .list-item:hover{
      color:#fff;
    }
  


`