
import { Header } from "./components/header.js";
import { playerForm } from "./components/playerForm.js";
import { playerCard } from "./components/playerCard.js";
//Variables

const  modal = document.querySelector(".modal-wrap") as HTMLElement;
const btnOpenModal = document.querySelector("#btn-player-show-form") as HTMLButtonElement;

// addCards();
window.customElements.define('player-card', playerCard);
window.customElements.define('player-form', playerForm);
window.customElements.define('header-component', Header);

//open modal
btnOpenModal.addEventListener('click', () => {
    modal.style.display = "flex";
})