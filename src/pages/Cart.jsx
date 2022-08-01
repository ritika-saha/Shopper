import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container=styled.div``
const Wrapper=styled.div`
    padding: 20px;
`
const Title=styled.h1`
    font-weight: 350;
    text-align: center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton=styled.button`
     padding: 10px;
    border: 2px solid ;
    border-color: ${props=>(props.type==="filled" &&"#e700e7")};
    border-color: ${props=>(props.type==="notfilled" &&"white")};
    color: ${props=>props.type==="filled" &&"#e700e7"};
    color: ${props=>props.type==="notfilled" &&"white"};
    background-color: ${props=>props.type==="filled" && "white"};
    background-color: ${props=>props.type==="notfilled" && "#e700e7"};
    font-weight: bolder;
    transition: all 0.2s ease-in;
    margin-top: 20px;

    &:hover{
    background-color: ${props=>(props.type==="filled" && "#e700e7")};
    background-color: ${props=>(props.type==="notfilled" && "white")};
    color: ${props=>(props.type==="filled" &&"white")};
    color: ${props=>(props.type==="notfilled" &&"#e700e7")};
    border:2px solid ;
    border-color: ${props=>(props.type==="filled" &&"white")};
    border-color: ${props=>(props.type==="notfilled" &&"#e700e7")};
    cursor: pointer;
    }
`

const TopTexts=styled.div``
const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
//const TopTexts
const Bottom=styled.div`
    display: flex;
    justify-content: space-around;
   // padding: 20px;
`
const Info=styled.div`
    flex: 3;
`

const Product=styled.div`
    display: flex;
    justify-content: space-between;
    
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
    margin-right :20px ;
`
const Image=styled.img`
    width: 50%;
`
const Detail=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.div``
const ProductColor=styled.div`
     width: 20px;
    height: 20px;
    border-radius: 30%;
    background-color: ${props=>props.color};
    margin-right: 7px;
    cursor: pointer;
`
const ProductSize=styled.span``
const PriceDetail=styled.div` 
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1;`
const ProductAmtContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmmount=styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;

`

const Hr=styled.hr`
    background-color: #ffb4ff;
    height: 1px;
    border: none;
`
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid #ffb4ff;
    border-radius: 10px;
    padding: 20px;
    height: 72vh;
`
const SummaryTitle=styled.h1`
    font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    color: ${props=>props.type==="total" && "purple"};
    background-color: ${props=>props.type==="total" && "#ffc6ff"};
    font-weight: ${props=>props.type==="total" && "bolder"};
    padding: ${props=>props.type==="total" && "10px"};
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``



export default function Cart() {
  return (
    <Container>
        <Navbar />
        <Announcement /> 
        <Wrapper>
            <Title>Your Bag !</Title>
            <Top>
                <TopButton type="notfilled">Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (4)</TopText>
                    <TopText>Wishlist (9)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                        <Image src="https://www.pngarts.com/files/3/Gym-Shoes-PNG-Background-Image.png" />
                            <Detail>
                                <ProductName><b>Product: </b>Nike Borahae Sneaker</ProductName>
                                <ProductId><b>ID: </b>99287382929032</ProductId>
                                <ProductColor color='purple'/>
                                <ProductSize><b>Size: </b>39(US)/6(UK)</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add style={{cursor:"pointer"}} />
                                <ProductAmmount>1</ProductAmmount>
                                <Remove style={{cursor:"pointer"}}/>
                            </ProductAmtContainer>
                            <ProductPrice>$ 45</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>

                    <Product>
                        <ProductDetail>
                        <Image src="https://th.bing.com/th/id/R.42341112f227e52c2cfbcaee695e1a45?rik=%2fDgVyeqLqR2oXg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fShort-Skirt-PNG-Clipart.png&ehk=DWub%2fZUqjMMUWjS21o93OXpvOdXaziGqwmJgTzn22pI%3d&risl=&pid=ImgRaw&r=0" />
                            <Detail>
                                <ProductName><b>Product: </b>H&M Denim Skirt</ProductName>
                                <ProductId><b>ID: </b>75437382929032</ProductId>
                                <ProductColor color='powderblue'/>
                                <ProductSize><b>Size: </b>XXL</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add style={{cursor:"pointer"}} />
                                <ProductAmmount>1</ProductAmmount>
                                <Remove style={{cursor:"pointer"}}/>
                            </ProductAmtContainer>
                            <ProductPrice>$ 25</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>

                    <Product>
                        <ProductDetail>
                        <Image src="https://pngimg.com/uploads/sweater/sweater_PNG57.png" />
                            <Detail>
                                <ProductName><b>Product: </b>Cashmere Sweater</ProductName>
                                <ProductId><b>ID: </b>99567852929032</ProductId>
                                <ProductColor color='grey'/>
                                <ProductSize><b>Size: </b>L</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add style={{cursor:"pointer"}} />
                                <ProductAmmount>1</ProductAmmount>
                                <Remove style={{cursor:"pointer"}}/>
                            </ProductAmtContainer>
                            <ProductPrice>$ 105</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>

                    <Product>
                        <ProductDetail>
                        <Image src="https://www.transparentpng.com/thumb/t-shirt/1wbWcn-t-shirt-transparent-background.png" />
                            <Detail>
                                <ProductName><b>Product: </b>Summer Tee-Shirt</ProductName>
                                <ProductId><b>ID: </b>9924356529032</ProductId>
                                <ProductColor color='yellow'/>
                                <ProductSize><b>Size: </b>XL</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmtContainer>
                                <Add style={{cursor:"pointer"}} />
                                <ProductAmmount>2</ProductAmmount>
                                <Remove style={{cursor:"pointer"}}/>
                            </ProductAmtContainer>
                            <ProductPrice>$ 15</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Coupon Discount</SummaryItemText>
                        <SummaryItemPrice>$ -10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <TopButton type="notfilled">Checkout Now</TopButton>
                </Summary>
            </Bottom>
        </Wrapper>   
        <Footer />
    </Container>
  )
}
