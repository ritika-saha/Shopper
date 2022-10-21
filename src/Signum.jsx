import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route , Routes , Link } from "react-router-dom"
import Login from './pages/Login'

const Container=styled.div`
    height: 100vh;
    width: 100vw;
    background-image:url(https://images.pexels.com/photos/7871150/pexels-photo-7871150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper=styled.div`
    width: 30%;
    background-color: #ffffff;
    padding: 20px;
   // border-radius: 2.5%;
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input=styled.input`
    flex: 1;
   // min-width: 30%;
   padding: 14px;
   margin: 7px 30px;
`
const Agreement=styled.span`
    margin: 7px 28px;
    font-size: 10px;
`
const Button=styled.button`
    margin: 7px 27px;
    padding: 10px;
    width: 120px;
    border: 2px solid white;
    color: white;
    background-color: #424242;
    font-weight: bolder;
    transition: all 0.2s ease-in;
   // margin-top: 20px;

    &:hover{
    background-color: white;
    color: #424242;
    border:2px solid #424242;
    cursor: pointer;
    transform: scale(1.1);
    }
`
export default function Signum() {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I agree with the
                    <b> terms & conditions </b>of services and user data 
                    collection.
                </Agreement>
                <Link to="/home"><Button>Create</Button></Link>
                
                <Link to="/login"><Button>or Login ?</Button></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
