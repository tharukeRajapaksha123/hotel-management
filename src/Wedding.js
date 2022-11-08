import React,{useState} from 'react'
import styled from "styled-components"


const Wrapper = styled.div`
   width: 500px;
   padding: 12px;
   height: 80px;
   background-color: rgba(0,0,0,0.8);
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   margin: 8px 0;
`
const Title = styled.h2`
   color : white;
   margin: 0;
   padding: 0;
`

const Desc = styled.h3`
   color : yellow;
   font-weight: bold;
`
const Wedding = ({ wedding }) => {

   return (

      <Wrapper>
         <Title>
            {wedding["name"]}
         </Title>
         <Desc>{wedding["desc"]}</Desc>

      </Wrapper>

   )
}

export default Wedding