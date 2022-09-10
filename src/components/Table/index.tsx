import {CardsWrapper, StyledCard, StyledTable} from "./styles";
import Card from "../Card";
import PlayerCards from "../PlayerCards";

function Table(props:{table:string[]}) {
    const{table}=props
    return <StyledTable>
        <CardsWrapper>
        {table.map((card)=>{
            return(<StyledCard><Card card={card}/></StyledCard>)
        })}
        </CardsWrapper>
        <PlayerCards/>
    </StyledTable>
}

export default Table