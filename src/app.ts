import { playerCard } from "./components/playerCard.js";
import { PlayerCard } from "./classes/PlayerCard.js";

//Variables
const playerList = document.querySelector('#player-list') as HTMLElement;
const cards: PlayerCard[] = [];

//Add cards
const addCards  = () => {
    for (let num = 1; num < 6; num++) {
        const newCard = new PlayerCard("Bob Smith", `${num}`, 'Forward', 10, num+5);
        cards.push(newCard); 
    }
}


addCards();

window.customElements.define('player-card', playerCard);


//Display a player card element for each card in array
cards.forEach(card => {
    const cardEl = document.createElement('player-card');
    cardEl.setAttribute("name", card.fullName);
    cardEl.setAttribute("kitNumber", card.kitNumber);
    cardEl.setAttribute("position", card.position);
    cardEl.setAttribute("goals", `${card.goals}`);
    cardEl.setAttribute("assists", `${card.assists}`);
    playerList.append(cardEl);
});