import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterElement><span className="text-footer">© {new Date().getFullYear()}  All trademarks are property of their respective owners.</span></FooterElement>
  )
}

export default Footer


const FooterElement = styled.footer`

  .text-footer{
   background: var(--clr-primary-2);
  padding: 4rem;
  margin-top: 20rem;
  text-align: center;
  font-size:2rem;
  color: #fff;
  display: block;
  }

  

  @media (max-width:555px){
    .text-footer{
      font-size:1.6rem;
    }
  }
  @media (max-width:340px){
    .text-footer{
      font-size:1.4rem;
    }
  }
  
`