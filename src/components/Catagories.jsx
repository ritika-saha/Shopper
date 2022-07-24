import styled from 'styled-components'
import React from 'react'
import { catagory } from '../data'
import CatagoryItem from './CatagoryItem'

const Container=styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

`
export const Catagories = () => {
  return (
   <Container>
        {
          catagory.map(item=>(<CatagoryItem item={item} key={item.id} />))
        }

   </Container>
  )
}
