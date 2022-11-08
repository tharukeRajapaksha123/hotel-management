import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const Container = styled.div`
    height: 100vh;
    background-size: cover;
    background-position : center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:center; //vertical alignment
    align-items:center; //horizonmtal alignment
    background-image: ${props => `url("${props.bgImage}")`};
    padding : 64px;
`

const Title = styled.h1``

const Paragraph = styled.p`
   color: white;
`

const Wrapper = styled.div`
   background-color: rgba(0,0,0,0.8);
   padding: 16px;
   border-radius: 16px;
   width: 600px;
`

const HomeBody = () => {
   return (
      <Container bgImage={"https://image.cnbcfm.com/api/v1/image/107033018-1647627522460-gettyimages-1169477405-img_4967.jpeg?v=1647627565"}>
         <Title></Title>
         <Fade bottom>
            <Wrapper>
               <Paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
               </Paragraph>
            </Wrapper>
         </Fade>

      </Container>
   )
}

export default HomeBody