import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { Products } from '../components/Products'

const Container=styled.div``

const Title=styled.h1`
    margin: 20px;
`

const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div`
    margin: 20px;
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
`
const Select=styled.select`
    margin: 5px;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
`
const Option=styled.option``


export default function ProductList() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Beige</Option>
                    <Option>Purple</Option>
                    <Option>Teal</Option>
                    <Option>Yellow</Option>
                    <Option>Orange</Option>
                    <Option>Maroon</Option>
                    <Option>Black</Option>
                    <Option>Grey</Option>
                    <Option>Lime</Option>
                    <Option>Crimson</Option>
                    <Option>Mauve</Option>
                    <Option>White</Option>
                    <Option>Rainbow</Option>
                </Select>
                <Select>
                <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XLL</Option>
                    <Option>3XL</Option>
                    <Option>4XL</Option>
                    <Option>5XL</Option>
                    <Option>6XL</Option>
                    <Option>7XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                <Option disabled selected>
                        Select
                    </Option>
                    <Option>Newest Trends</Option>
                    <Option>Price (asc.)</Option>
                    <Option>Price (desc.)</Option>
                    <Option>Summer Sale</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}
