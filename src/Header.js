import React from 'react'
import styled from "styled-components"
const Header = () => {
   return (
      <Container>
         <h1>Wedding and Banquet Hall</h1>
      </Container>
   )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 80px;
    align-items: center;
   position: fixed;
    justify-content: center;
    padding:0 20px ;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
   /* From https://css.glass */
   margin: 0 16px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   border: 1px solid rgba(255, 255, 255, 0.3);

   h1{
      font-weight: bold;
   }
`