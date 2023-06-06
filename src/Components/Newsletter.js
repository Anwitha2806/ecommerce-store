import React from 'react'
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../responsive';

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
    ${mobile({ textAlign: "center" })};
    `
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })};
`
const ButtonN = styled.button`
    flex:1;
    border: none;
    background-color: teal;
    color: white;
`

const Input = styled.input`
 border: none;
 flex: 8;
 padding-left: 20px;
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
            <Input placeholder='your email'></Input>
            <ButtonN>
                <Send/>
            </ButtonN>
        </InputContainer>
      </Container>
    </div>
  )
}

export default Newsletter;
