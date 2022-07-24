import {  Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height: 60vh;
background-color: #ffd8ff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
font-weight: bolder;
font-size: 70px;
margin: 20px;
`
const Desc=styled.div`
font-size: 20px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 2px solid #fec9fe;

`
const Input=styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button=styled.button`
flex: 1;
background-color: #ff02ff;
border: none;
color: white;
&:hover{
  color: #ff02ff;
  background-color: white;
  cursor: pointer;
  border: 2px solid #ff02ff;
}
`

export default function Newsletter() {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>SignUp and be a part of our mailing-list to get latest updates and added benifits !!! </Desc>
        <InputContainer>
            <Input placeholder='Enter Your Email' />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
