import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  display: flex;
`

const Left=styled.div`
  flex: 1;
  padding: 25px;
`
const Logo=styled.h1``
const Desc=styled.p` margin-top:10px;`
const Socials=styled.div`
  margin-top:20px;
  display: flex;
`
const SocialIcon=styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  background-color: #de00de;
  transition: all 0.2s ease-in;
  &:hover{
    transform: scale(1.1);
  }

`

const Middle=styled.div`
  flex: 1;
  padding: 25px;
`
const Title=styled.h3`
margin-bottom: 20px;
`
const List=styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const ListItem=styled.li`
  margin-top: 10px;
  width: 50%;
  cursor: pointer;
  &:hover{
    font-weight: bold;
    color: #fb30fb;
  }
`

const Right=styled.div`
  flex: 1;
  padding: 25px;
`
const Contact=styled.div`
   margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #ffdcff;
  }
`
const Pay=styled.img`
  width: 70%;
  cursor: pointer;
`


export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Shopper.</Logo>
        <Desc>
          We at Shopper value quality and produce utmost quality products. 
          Shop with best offers and exclusive discounts on various products 
          through-out the year with top-notch quality and extremely trendy 
          items to revamp your closet for every season and occasion.
        </Desc>
        <Socials>
          <SocialIcon><Facebook /></SocialIcon>
          <SocialIcon><Instagram /></SocialIcon>
          <SocialIcon><Twitter /></SocialIcon>
          <SocialIcon><Pinterest /></SocialIcon>
        </Socials>
      </Left>

      <Middle>
          <Title>Check It Out !!</Title>
          <List>
             <ListItem>Home</ListItem>
             <ListItem>Cart</ListItem>
             <ListItem>Ladies wear</ListItem>
             <ListItem>Mens wear</ListItem>
             <ListItem>Kids wear</ListItem>
             <ListItem>Lounge wear</ListItem>
             <ListItem>Athleisure</ListItem>
             <ListItem>Handbags</ListItem>
             <ListItem>Sneakers</ListItem>
             <ListItem>Skincare</ListItem>
          </List>
          
      </Middle>

      <Right>
              <Title>Contact Us</Title>
              <Contact><Room style={{marginRight:"10px",color:"#de00de"}}/><a style={{textDecoration:"none"}} href='https://www.bing.com/maps?q=4+Privet+Drive+Street%2C+Surrey.&cvid=6b5dc3e8fa564f1bb0de83bb1a90f895&aqs=edge..69i57j69i59i450l8...8.355078j0j1&pglt=419&FORM=ANNTA1&PC=LCTS'>4 Privet Drive, Leavesden, Watford, WD25 7FD, England, United Kingdom</a></Contact>
              <Contact><Phone style={{marginRight:"10px",color:"#de00de"}}/><a style={{textDecoration:"none", color:"black"}} href='tel:+91 102383297'>+91 102383297</a></Contact>
              <Contact><Mail style={{marginRight:"10px",color:"#de00de"}}/><a style={{textDecoration:"none", color:"black"}}  href="mailto:contact@Shopper.dev">contact@Shopper.dev</a></Contact>
              <Pay src='https://th.bing.com/th/id/R.aa2540dc8ddf476a3712e7bc6df6fd43?rik=0VA%2f7nbaNjaVVQ&riu=http%3a%2f%2fwww.ana.co.jp%2fcont-image%2fcommon%2flogo%2f0058-lang-multi.jpg&ehk=YOn9FUcUj%2fiyHHm0%2b2d1bbclkNXZI6Fk3TrDc%2beuVlg%3d&risl=&pid=ImgRaw&r=0'></Pay>
      </Right>

    </Container>
  )
}
