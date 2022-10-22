import {CardsWrapper, StyledCard, StyledTable} from "./styles";
import Card from "../Card";
import PlayerCards from "../PlayerCards";

function Table(props:{table:string[],cards:any}) {
    const{table, cards}=props
    return <StyledTable>
        <CardsWrapper>
        {table.map((card, index)=>{
            return(<StyledCard key={`key_${index}`}><Card card={card}/></StyledCard>)
        })}
        </CardsWrapper>
        <PlayerCards cards={cards}/>
    </StyledTable>
}

export default Table