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
                  <span className="logo-text">Game Portal</span>
                </Link>
                
            </ul>
          </HeaderNav>
      
  )
}

export default Header


const HeaderNav = styled.nav`



  .logo-container{
    display:flex;
    align-items:center;
    /* flex-direction:column; */
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

`