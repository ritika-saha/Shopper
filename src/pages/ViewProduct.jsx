import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { BrowserRouter, Route , Routes , Link } from "react-router-dom";

const Container=styled.div``
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer=styled.div`
    flex: 1;
`
const Image=styled.img`
    width: 85%;
    height: 77vh;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title=styled.h1`
    font-weight: 500;
`
const Desc=styled.p`
    margin: 30px 0px;
`
const Price=styled.span`
    font-weight: 200;
    font-size: 30px;
`
const FilterContainer=styled.div`
    width: 70%;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`
const Filter=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   // margin-right: 50px;
`

const FilterTitle=styled.span`
    margin-right: 15px;
    font-weight: 300;
`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 30%;
    background-color: ${props=>props.color};
    margin-right: 7px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.4);
    }
`
const FilterSize=styled.select`
    padding: 10px;
    font-weight: 300;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
    //display: flex;
    //align-items: center;
    //justify-content: space-between;
   // width: 71%;
   margin-top: 20px;
`
const AmmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`
const Ammount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 30%;
    border: 1px solid #ff33ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
`
const Button=styled.button`
    padding: 10px;
    border: 2px solid white;
    color: white;
    background-color: #ff33ff;
    font-weight: bolder;
    transition: all 0.2s ease-in;
    margin-top: 20px;

    &:hover{
    background-color: white;
    color: #ff33ff;
    border:2px solid #ff33ff;
    cursor: pointer;
    }
`


    



export default function ViewProduct() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://pngimg.com/uploads/sweater/sweater_PNG57.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Cashmere Sweater</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, consectetur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quibusdam.
                </Desc>
                <Price>$59.00</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="red" />
                        <FilterColor color="green" />
                        <FilterColor color="powderblue" />
                        <FilterColor color="purple" />
                        <FilterColor color="black" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            <FilterSizeOption>3XL</FilterSizeOption>
                            <FilterSizeOption>4XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmmountContainer>
                        <Remove style={{cursor:"pointer"}}/>
                        <Ammount >1</Ammount>
                        <Add style={{cursor:"pointer"}}/>
                    </AmmountContainer>
                    <Link to="/cart"><Button>ADD TO CART</Button></Link>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
