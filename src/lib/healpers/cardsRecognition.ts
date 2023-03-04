import getCombination, { getCardNumber } from "./getCombination";
import { combNumber } from "../../App";
import { tab } from "@testing-library/user-event/dist/tab";

function cardsRecognition(cards: { [i: string]: string[] }, table: string[]) {
  let query = "?cc=";
  query += table.toString();
  console.log(query);
  Object.values(cards).forEach((cardArray) => {
    query += "&pc[]=" + cardArray.toString();
  });

  let url = "https://api.pokerapi.dev/v1/winner/texas_holdem";

  fetch(url + query)
    .then((response) => response.json())
    .then((price) => console.log(price)); ////// написать код который

  console.log(cards, table);
  let allComb: any = {};

  Object.keys(cards).forEach((key: any) => {
    //console.log("Player ", key, ":   ", getCombination(cards[key], table));
    allComb[key] = getCombination(cards[key], table);
  });

  let sortedComb: any = Object.entries(allComb)
    .filter(([key, value]) => {
      if (value == "no combinations") {
        return false;
      }

      return true;
    })
    .sort((itema: any, itemb: any) => {
      //console.log(itema);
      if (combNumber[itema[1].name] < combNumber[itemb[1].name]) {
        return -1;
      }
      if (combNumber[itema[1].name] > combNumber[itemb[1].name]) {
        return 1;
      }
      return 0;
    });
  //console.log(sortedComb);
  let winner = sortedComb
    .filter(([key, value]: any) => {
      if (value.name != sortedComb[0][1]?.name) {
        return false;
      }
      return true;
    })
    .at(0);
  console.log(winner);

  let usedCombinations = ["Care", "Set", "To pare", "Pare"];
  let betweenResults = [...table, ...cards[Number(winner[0])]];
  let winnResults: any = [];

  if (usedCombinations.includes(winner[1].name)) {
    betweenResults.forEach((card, i) => {
      if (getCardNumber(card) == winner[1].result[0]) {
        winnResults.push(card);
        betweenResults = betweenResults
          .slice(0, i)
          .concat(betweenResults.slice(i + 1, betweenResults.length));
      }

      if (winner[1].name == "To pare") {
        if (getCardNumber(card) == winner[1].result[1]) {
          winnResults.push(card);
          betweenResults = betweenResults
            .slice(0, i)
            .concat(betweenResults.slice(i + 1, betweenResults.length));
        }
      }
    });

    console.log(winnResults);
    console.log(betweenResults);

    //winnResults.push();
  }
}
export default cardsRecognition;
