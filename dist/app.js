import { Button } from "./components/button.js";
import { Card } from "./components/card.js";
import { CardList } from "./components/cardlist.js";
import { Modal } from "./components/modal.js";
export class App {
    constructor(el) {
        this.el = el;
        this.modal = new Modal(this);
        this.cardList = new CardList(this);
        this.players = [];
        this.currentCardIndex = 0;
        this.showBtn = new Button("Add Player", this.onShowModal.bind(this), this, { cssClasses: ["btn-show-modal"] });
        this.addObject(this.showBtn.el);
        this.addObject(this.cardList.el);
        this.addObject(this.modal.elWrap);
    }
    //===================Sub Routines
    addObject(el) {
        this.el.append(el);
    }
    clearFormInputs() {
        //clear form inputs
        const formInputs = this.modal.form.inputs;
        Object.keys(formInputs).forEach((key) => {
            formInputs[key].el.value = "";
        });
    }
    disableButton(btn) {
        btn.el.disabled = true;
        btn.el.classList.add("btn-disabled");
    }
    enableButton(btn) {
        btn.el.disabled = false;
        btn.el.classList.remove("btn-disabled");
    }
    checkForEmptyInputFields() {
        //get form inputs
        const formInputs = this.modal.form.inputs;
        //add event listener to check for empty fields, disable buttons if empty
        Object.keys(formInputs).forEach((key) => {
            formInputs[key].el.addEventListener("keyup", () => {
                if (this.allFilled()) {
                    this.enableButton(this.modal.form.addCard);
                    this.enableButton(this.modal.form.saveCard);
                }
                else {
                    this.disableButton(this.modal.form.addCard);
                    this.disableButton(this.modal.form.saveCard);
                }
            });
        });
    }
    //==================Functions
    GetCardAndIndex(e) {
        //get card of pressed delete button
        const target = e.target;
        const card = target.closest('.player-card');
        const nodes = Array.from(this.cardList.el.children);
        //index of card in card list
        const index = nodes.indexOf(card);
        return [card, index];
    }
    isAlpha(inputText) {
        if (typeof inputText != "string")
            return false; // only process strings  
        return /^[A-Za-z]+$/.test(inputText);
    }
    isNumeric(inputText) {
        if (typeof inputText != "string")
            return false; // only process strings  
        return /^-?\d+$/.test(inputText);
    }
    validateInputs(name, number, position, goals, assists) {
        let isValid = true;
        if (!this.isAlpha(name.trim()) || this.isNumeric(name.trim())) {
            isValid = false;
        }
        else if (this.isAlpha(number.toString().trim()) || !this.isNumeric(number.toString().trim())) {
            isValid = false;
        }
        else if (!this.isAlpha(position.trim()) || this.isNumeric(position.trim())) {
            isValid = false;
        }
        else if (this.isAlpha(goals.toString().trim()) || !this.isNumeric(goals.toString().trim())) {
            isValid = false;
        }
        else if (this.isAlpha(assists.toString().trim()) || !this.isNumeric(assists.toString().trim())) {
            isValid = false;
        }
        return isValid;
    }
    allFilled() {
        let filled = true;
        const formInputs = this.modal.form.inputs;
        //check that input is not empty
        Object.keys(formInputs).forEach((key) => {
            if (formInputs[key].el.value === "") {
                filled = false;
            }
        });
        return filled;
    }
    //==================Events
    onShowModal(e) {
        e.preventDefault();
        //set modal to display flex
        this.modal.elWrap.style.display = "flex";
        //hide save button
        this.modal.form.saveCard.el.style.display = "none";
        //disable add button on start
        this.disableButton(this.modal.form.addCard);
    }
    onCancelCard(e) {
        e.preventDefault();
        //clear form
        this.clearFormInputs();
        //set modal to display none
        this.modal.elWrap.style.display = "none";
        //hide save button
        this.modal.form.saveCard.el.style.display = "none";
        //show add button
        this.modal.form.addCard.el.style.display = "inline-block";
    }
    onAddCard(e, playerData) {
        e.preventDefault();
        //trim values
        const valName = playerData.name.trim();
        const valNum = Number(playerData.number.toString().trim());
        const valPosition = playerData.position.trim();
        const valGoals = Number(playerData.goals.toString().trim());
        const valAssists = Number(playerData.assists.toString().trim());
        const valDetails = playerData.details.trim();
        if (this.validateInputs(valName, valNum, valPosition, valGoals, valAssists)) {
            const newCard = new Card(valName, valNum, valPosition, valGoals, valAssists, valDetails, this);
            //add new card to list
            this.players.push(newCard);
            //hide modal
            this.modal.elWrap.style.display = "none";
            //render cards and clear form
            this.renderCards();
            this.clearFormInputs();
        }
        else {
            return;
        }
    }
    onDeleteCard(e) {
        e.preventDefault();
        const [card, index] = this.GetCardAndIndex(e);
        //remove card from player array and from dom
        this.players.splice(index, 1);
        card.remove();
        //render updated list;
        this.renderCards();
    }
    onEditCard(e) {
        e.preventDefault();
        const [cardEl, index] = this.GetCardAndIndex(e);
        const card = this.players[index];
        const formInputs = this.modal.form.inputs;
        //add text to edit form
        formInputs.name.el.value = card.playerName;
        formInputs.number.el.value = `${card.playerNum}`;
        formInputs.position.el.value = card.playerPosition;
        formInputs.goals.el.value = `${card.playerGoals}`;
        formInputs.assists.el.value = `${card.playerAssists}`;
        formInputs.details.el.value = card.playerDetails;
        console.log(cardEl);
        //hide add button
        this.modal.form.addCard.el.style.display = "none";
        this.modal.form.saveCard.el.disabled = true;
        this.modal.form.saveCard.el.classList.add("btn-disabled");
        //show modal
        this.onShowModal(e);
        //show save button
        this.modal.form.saveCard.el.style.display = "inline-block";
        this.currentCardIndex = index;
    }
    onSaveCard(e) {
        e.preventDefault();
        const card = this.players[this.currentCardIndex];
        const formInputs = this.modal.form.inputs;
        //updated card
        card.playerName = formInputs.name.el.value.trim();
        card.playerNum = Number(formInputs.number.el.value.trim());
        card.playerPosition = formInputs.position.el.value.trim();
        card.playerGoals = Number(formInputs.goals.el.value.trim());
        card.playerAssists = Number(formInputs.assists.el.value.trim());
        card.playerDetails = formInputs.details.el.value.trim();
        //if valid inputs update card
        if (this.validateInputs(card.playerName, card.playerNum, card.playerPosition, card.playerGoals, card.playerAssists)) {
            //Update card element
            card.h4.textContent = card.playerName;
            card.ul.innerHTML = `
            <li>Num: ${card.playerNum}</li>
            <li>Position: ${card.playerPosition}</li>
            <li>Goals: ${card.playerGoals}</li>
            <li>Assists: ${card.playerAssists}</li>
            <li>Details: ${card.playerDetails}</li>
            `;
            //set modal to display none
            this.modal.elWrap.style.display = "none";
            this.modal.form.saveCard.el.style.display = "none";
            this.modal.form.addCard.el.style.display = "inline-block";
            this.clearFormInputs();
            this.renderCards();
        }
        else {
            return false;
        }
    }
    renderCards() {
        this.players.forEach(player => {
            this.cardList.el.append(player.el);
        });
    }
    Init() {
        this.renderCards();
        this.checkForEmptyInputFields();
    }
}
const app = new App(document.querySelector("#app"));
app.Init();
