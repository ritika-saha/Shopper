import React from 'react'
import styled from 'styled-components'
import { PopularProducts } from '../data'
import { ProductRender } from './ProductRender'

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 50px;
`
export const Products = () => {
  return (
    <Container>
        {
          PopularProducts.map(item=>(
            <ProductRender item={item} key={item.id} />
          ))
        }
    </Container>
  )
}
