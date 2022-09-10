import {PlayerCard, PlayerCardsWrapper} from "./styles";
import Card from "../Card";
import { StyledCard } from "../Table/styles";



function PlayerCards()
{
    return <PlayerCardsWrapper>
        <PlayerCard top={"10px"} left={"260px"}><StyledCard/></PlayerCard>
        <PlayerCard top={"20px"} left={"300px"}><StyledCard/></PlayerCard>
    </PlayerCardsWrapper>
}
export default PlayerCards