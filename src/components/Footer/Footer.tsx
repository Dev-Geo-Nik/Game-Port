import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterElement>© {new Date().getFullYear()} Digiwalls  Media, all rights reserved. All trademarks are property of their respective owners.</FooterElement>
  )
}

export default Footer


const FooterElement = styled.footer`
  background: var(--clr-primary-2);
  padding: 4rem;
  margin-top: 20rem;
  text-align: center;
  font-size:2rem;
  color: #fff;
  
  
`