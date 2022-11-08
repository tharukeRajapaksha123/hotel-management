import React, { useState } from 'react'
import styled from "styled-components"
import Wedding from './Wedding'
import Fade from 'react-reveal/Fade';
import { Button } from 'antd';
import AddWeddingModal from './AddWeddingModal';


const Wrapper = styled.div`
   height: 100vh;
   display: flex;
`

const Left = styled.div`
   flex: 1;
   height: 100%;
   background-image: ${props => `url("${props.bgImage}")`};
   background-size: fill-hei;
   background-position : center;
   background-repeat: no-repeat;
    align-items: center;
   justify-content: center;
   display:flex;
   flex-direction:column;
`

const Right = styled.div`
   flex: 1;
   display   : flex;
   flex-direction: column;
 
`

const SubRight = styled.div`
   flex : 1;
   width: 100%;
`

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: fill;
`





const Package = () => {
   const weddings = [
      {
         "id": "1",
         "name": "Platinum",
         "desc": "A vertable feast for your banquet"
      },
      {
         "id": "2",
         "name": "Gold Package",
         "desc": "Perfect Grand Celebration"
      },
      {
         "id": "3",
         "name": "Silver Package",
         "desc": "Local for an intermidiate reception"
      },
      {
         "id": "4",
         "name": "Bronze Package",
         "desc": "A splendid package for your big day"
      },
   ]

   const [addModal, setAddModal] = useState(false)

   return (

      <Wrapper>
         <Left bgImage="https://www.gordoncountry.com.au/wp-content/uploads/gordon-country-weddings.jpg">
            {
               weddings.map((wedding) => {
                  return <Fade right> <Wedding key={wedding["id"]} wedding={wedding} /></Fade>
               })
            }
            <Button onClick={() => { setAddModal(true) }} type="primary" >Inquire Now</Button>
         </Left>
         <Right>
            <SubRight>
               <Image src="https://d37b3blifa5mva.cloudfront.net/000_clients/131412/page/h800-131412v7AEH1dY.jpg" alt="aadasd" />
            </SubRight>
            <SubRight>
               <Image src="https://www.icclevelandweddings.com/resourcefiles/homeimages/icclevelandweddings-home-masthead-11.jpg" alt="aadasd" />
            </SubRight>
         </Right>
         <AddWeddingModal isModalOpen={addModal} handleCancel={() => { console.log("{ca}"); setAddModal(false) }} handleOk={() => { setAddModal(false) }} />
      </Wrapper>

   )
}

export default Package