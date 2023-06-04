import React from 'react'
import styled from 'styled-components';
import { Send } from '@material-ui/icons';

const Container = styled.div`
 height: 60vh;
 background-color: #fcf5f5;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    `
const InputContainer = styled.div`
`
const ButtonN = styled.div`
`
function Newsletter() {
  return (
    <div>
      <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
            Get latest updates for your favorite items!!
        </Description>
        <InputContainer>
            <input placeholder='your email'></input>
            <ButtonN>
                <Send/>
            </ButtonN>
        </InputContainer>
      </Container>
    </div>
  )
}

export default Newsletter;
