import { Search, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import { BrowserRouter, Route , Routes , Link  } from "react-router-dom";
//import MailIcon from '@mui/icons-material/Mail'

const Container= styled.div`
  height: 60px;
 // background-color: #df8080;
  color: #000000;
`
const Wrapper=styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Left=styled.div`flex:1;
display: flex;
align-items: center;
cursor: pointer;
`
const Centre=styled.div`flex:2;
text-align: center;
`
const Right=styled.div`flex:1;
display: flex;
  align-items: center;
  justify-content:space-around;`

const Language=styled.span`
  font-size: 14px;
  cursor: pointer;
 
`

const SearchContainer=styled.div`
//border: 1px solid grey;
display: flex;
  align-items: center;
  margin-left: 20px;
 padding: 10px;
`
const Input=styled.input`
  border: 0.5px solid #de00de8d;
  padding: 5px;
  margin-right: 10px;
`

const Logo=styled.h1`
  font-weight: bolder;
`

const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
`
export default function Navbar() {
  return (
    <Container><Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
         <Input />
          <Search />
        </SearchContainer>
      </Left>
      <Link to="/home" style={{ textDecoration: 'none' }}><Centre><Logo>Shopper.</Logo></Centre></Link>
      <Right>
      <Link to="/login" style={{ textDecoration: 'none' }} ><MenuItem>LogIn</MenuItem></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><MenuItem>SignUp</MenuItem></Link>
      <MenuItem>
      <Badge badgeContent={4} color="secondary">
       <Link to="/cart"><ShoppingCart /></Link> 
      </Badge>
      </MenuItem>
      </Right> 
      </Wrapper></Container>
  )
}
