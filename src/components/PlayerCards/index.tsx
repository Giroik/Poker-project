import { PlayerCard, PlayerCardsWrapper } from "./styles";
import Card from "../Card";
import { StyledCard } from "../Table/styles";
import { Fragment } from "react";

function PlayerCards(props: any) {
  const { cards } = props;

  let pixelsX: any = [
    [(560 / 1332) * 100, (600 / 1332) * 100],
    [(260 / 1332) * 100, (300 / 1332) * 100],
    [(0 / 1332) * 100, (40 / 1332) * 100],
    [(260 / 1332) * 100, (300 / 1332) * 100],
    [(560 / 1332) * 100, (600 / 1332) * 100],
    [(960 / 1332) * 100, (1000 / 1332) * 100],
    [(1200 / 1332) * 100, (1240 / 1332) * 100],
    [(960 / 1332) * 100, (1000 / 1332) * 100],
  ];
  let pixelsY: any = [
    [(530 / 656) * 100, (540 / 656) * 100],
    [(530 / 656) * 100, (540 / 656) * 100],
    [(250 / 656) * 100, (260 / 656) * 100],
    [(10 / 656) * 100, (20 / 656) * 100],
    [(10 / 656) * 100, (20 / 656) * 100],
    [(10 / 656) * 100, (20 / 656) * 100],
    [(250 / 656) * 100, (260 / 656) * 100],
    [(530 / 656) * 100, (540 / 656) * 100],
  ];

  return (
    <PlayerCardsWrapper>
      {cards &&
        Object.values(cards)?.map((card: any, index) => {
          return (
            <Fragment key={index}>
              <PlayerCard
                top={pixelsY[index][0] + "%"}
                left={pixelsX[index][0] + "%"}
              >
                <StyledCard>
                  <Card card={card?.[0]} />
                </StyledCard>
              </PlayerCard>
              <PlayerCard
                top={pixelsY[index][1] + "%"}
                left={pixelsX[index][1] + "%"}
              >
                <StyledCard>
                  <Card card={card?.[1]} />
                </StyledCard>
              </PlayerCard>
            </Fragment>
          );
        })}

      {/*<PlayerCard top={"250px"} left={"0px"}>*/}
      {/*  <StyledCard>*/}
      {/*    <Card card={cards?.[1]?.[0]} />*/}
      {/*  </StyledCard>*/}
      {/*</PlayerCard>*/}
      {/*<PlayerCard top={"260px"} left={"40px"}>*/}
      {/*  <StyledCard>*/}
      {/*    <Card card={cards?.[1]?.[1]} />*/}
      {/*  </StyledCard>*/}
      {/*</PlayerCard>*/}
    </PlayerCardsWrapper>
  );
}
export default PlayerCards;
