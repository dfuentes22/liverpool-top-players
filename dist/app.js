import { playerCard } from "./components/playerCard.js";
import { PlayerCard } from "./classes/PlayerCard.js";
import { Header } from "./components/header.js";
import { playerForm } from "./components/playerForm.js";
//Variables
const playerList = document.querySelector('#player-list');
const modal = document.querySelector(".modal-wrap");
// Get the button that opens the modal
const btnOpenModal = document.querySelector("#btn-player-show-form");
const btnCloseModal = document.querySelector("#btn-player-cancel");
const cards = [];
//Add cards
const addCards = () => {
    for (let num = 1; num < 6; num++) {
        const newCard = new PlayerCard("Bob Smith", `${num}`, 'Forward', 10, num + 5);
        cards.push(newCard);
    }
};
addCards();
window.customElements.define('player-card', playerCard);
window.customElements.define('header-component', Header);
window.customElements.define('player-form', playerForm);
btnOpenModal.addEventListener('click', () => {
    modal.style.display = "flex";
});
btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hi");
});
console.log(btnCloseModal);
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
