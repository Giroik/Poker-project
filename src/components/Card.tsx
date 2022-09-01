
function Card({card}:any)
{
    try{
        const cardImage=require(`../cards/${card}.png`)
        return <img src={cardImage}/>
    }
    catch (e)
    {
        return card
    }

}
export default Card