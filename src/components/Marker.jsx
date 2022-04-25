import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  border-radius: 50%;
  color: #fff;
  z-index: 2;
  background: #3656E6;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1.3;
  margin-bottom: 30px;

  &::after {
    content: "";
    width: 15px;
    height: 40px;
    background: #3656E6;
    border-radius: 80% 80% 80% 80% / 50% 50% 20% 20%;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
`


const Marker = ({ number, classes }) => {
  return (
    <Container className={`w-[50px] leading-[3rem] lg:leading-[4.5rem] h-[50px] lg:w-[70px] text-justify text-lg lg:text-[1.5rem] lg:h-[70px] order-2 ${classes}`}>{number}</Container>
  )
}

export default Marker