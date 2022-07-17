import styled from '@emotion/styled'
import React from 'react'

const Container=styled.div`
    height: 30px;
    background-color: #fd88fd;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
`
export default function Announcement() {
  return (
    <Container>
         🎉 Hurry up! Grab exciting offers with 45% off !!!!!
    </Container>
  )
}
