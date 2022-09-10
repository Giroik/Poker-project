import styled from "styled-components";

export const StyledTable=styled.div`
  background: green;
  height: 70vh;
  width: 70%;
  border-radius: 35% 35% / 60% 60%;
  border: 10mm groove rgb(138, 60, 27);
  border-right-style: ridge;
  border-bottom-style: ridge;
  margin: auto;
  position: relative;
`
export const CardsWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`
export const StyledCard=styled.div`
  height: 100px;
  width: 70px;
  margin: 0px 20px;
  border-radius:10px;
  border: 2px groove black;
  
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{min-width: 100%; height:100%;flex-shrink: 0}
  
`
