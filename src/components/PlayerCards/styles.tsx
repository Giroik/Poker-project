import styled from "styled-components";

export const PlayerCardsWrapper=styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
`
export const PlayerCard=styled.div<{top:string, left:string}>`
  position: absolute;
  ${({top})=>`top:${top}`};
  ${({left})=>`left:${left}`};
  transform: rotate(-10deg);
`