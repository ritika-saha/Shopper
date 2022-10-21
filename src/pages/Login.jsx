import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route , Routes , Link as Link1 } from "react-router-dom";

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
    margin-bottom: 10px;
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
const LinkContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin: 7px 27px;
`

const Link=styled.a`
 font-size:15px;
 &:hover{
    font-weight: bolder;
 }
`
export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>SignIn to Your Account</Title>
            <Form>
                <Input placeholder="User Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
                <Link1 to="/home"><Button>Log In</Button></Link1>
                <LinkContainer>
                <Link href='' style={{textDecoration:"none",color:"#424242"}}>Forgot Password ?</Link>
                <Link1 to="/" style={{ textDecoration: 'none' }}><Link href='' style={{marginTop:"7px",textDecoration:"none",color:"#424242"}}>Create a New Account</Link></Link1>
                </LinkContainer>
            </Form>
        </Wrapper>
    </Container>
  )
}
