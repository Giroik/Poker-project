function cardsRecognition(cards: { [i: string]: string[] }, table: string[]) {
    let query = "?cc=";
    query += table.toString();
    Object.values(cards).forEach((cardArray) => {
        query += "&pc[]=" + cardArray.toString();
    });

    let url = "https://api.pokerapi.dev/v1/winner/texas_holdem";

    fetch(url + query)
        .then((response) => response.json())
        .then((price) => console.log(price)); ////// написать код который
}

export default cardsRecognition;
