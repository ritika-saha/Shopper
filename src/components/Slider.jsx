import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {ArrowRightOutlined,ArrowLeftOutlined} from '@mui/icons-material'
import { sliderItems } from '../data'

const Container= styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: #fd88fd;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction==='left' && '10px'};
right: ${props=>props.direction==='right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.7;
`
const Slide=styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${props=>props.bgcolor};
`
const ImgContainer=styled.div`
flex:1;
height: 100%;
`
const InfoContainer=styled.div`
flex:1;
padding: 50px;
`
const Title=styled.h1`
font-size: 60px;
`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500px;
`
const Button=styled.button`
padding: 10px;
border: 2px solid #fd88fd;
color: #fd88fd;
background-color: white;

&:hover{
  background-color: #fd88fd;
  color: white;
  cursor: pointer;
}
`

const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1s ease;
transform: translateX(${props=>props.sliderIndex * -100}vw);
`

const Image=styled.img`
  height: 85%;
  width: 105%;
`


export default function Slider() {
  const [sliderIndex,setSliderIndex]=useState(0)
  const handleClick=(dir)=>{
    if(dir==="left"){
      setSliderIndex(sliderIndex>0?sliderIndex-1:3)
    }
    else{
      setSliderIndex(sliderIndex<3?sliderIndex+1:0)
    }
    }
  return (
   <Container>
     <Arrow direction="left" onClick={()=>handleClick("left")}>
      <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper sliderIndex={sliderIndex}>
      {sliderItems.map((item)=>(
        <Slide bgcolor={item.bg}>
        <ImgContainer>
            <Image src={item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Slide>
      ))}
    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
      <ArrowRightOutlined/>
    </Arrow>
   

   </Container>
  )
}
