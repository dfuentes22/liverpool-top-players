import { Button } from "./components/button.js";
import { Card } from "./components/card.js";
import { CardList } from "./components/cardlist.js";
import { Form } from "./components/form.js";
import { Modal } from "./components/modal.js";
export class App {
    constructor(el) {
        this.el = el;
        this.modal = new Modal(this);
        this.form = new Form(this);
        this.cardList = new CardList(this);
        this.showBtn = new Button("Add Player", this.onShowModal.bind(this), this, { cssClasses: ["btn-show-modal"] });
        this.addObject(this.showBtn.el);
        this.addObject(this.cardList.el);
        this.addObject(this.modal.elWrap);
    }
    addObject(el) {
        this.el.append(el);
    }
    onShowModal(e) {
        e.preventDefault();
        //set modal to display flex
        this.modal.elWrap.style.display = "flex";
        //hide save button
        this.modal.form.saveCard.el.style.display = "none";
    }
    onCancelCard(e) {
        e.preventDefault();
        //set modal to display none
        this.modal.elWrap.style.display = "none";
        //todo: reset inputs
        this.modal.form.inputName.value = "";
        this.modal.form.inputNum.value = "";
        this.modal.form.inputPosition.value = "";
        this.modal.form.inputGoals.value = "";
        this.modal.form.inputAssists.value = "";
        //hide save button
        this.modal.form.saveCard.el.style.display = "none";
        //show add button
        this.modal.form.addCard.el.style.display = "inline-block";
    }
    onAddCard(e) {
        e.preventDefault();
        const valName = this.modal.form.inputName.value.trim() || "";
        const valNum = this.modal.form.inputNum.value.trim() || "";
        const valPosition = this.modal.form.inputPosition.value.trim() || "";
        const valGoals = Number(this.modal.form.inputGoals.value.trim()) || 0;
        const valAssists = Number(this.modal.form.inputAssists.value.trim()) || 0;
        //clear form inputs
        this.modal.form.inputName.value = "";
        this.modal.form.inputNum.value = "";
        this.modal.form.inputPosition.value = "";
        this.modal.form.inputGoals.value = "";
        this.modal.form.inputAssists.value = "";
        if (valName && valNum && valPosition && valGoals && valAssists) {
            const newCard = new Card(valName, valNum, valPosition, valGoals, valAssists, this);
            this.cardList.el.append(newCard.el);
            this.modal.elWrap.style.display = "none";
        }
        else {
            return;
        }
    }
    onDeleteCard(e, btn) {
        var _a;
        e.preventDefault();
        //get card
        const card = (_a = btn.el.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
        card.remove();
    }
    onEditCard(e, btn) {
        var _a;
        e.preventDefault();
        const card = (_a = btn.el.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
        const playerNameEl = card.childNodes[0];
        const playerNumEl = card.childNodes[1].childNodes[1];
        const playerPosEl = card.childNodes[1].childNodes[3];
        const playerGoalsEl = card.childNodes[1].childNodes[5];
        const playerAssistsEl = card.childNodes[1].childNodes[7];
        //get text from elements
        const strPlayerName = playerNameEl.innerText;
        const strPlayerNum = playerNumEl.innerText.split(" ");
        const strPlayerPos = playerPosEl.innerText.split(" ");
        const strPlayerGoals = playerGoalsEl.innerText.split(" ");
        const strPlayerAssists = playerAssistsEl.innerText.split(" ");
        //add text to edit form
        this.modal.form.inputName.value = strPlayerName;
        this.modal.form.inputNum.value = strPlayerNum[1];
        this.modal.form.inputPosition.value = strPlayerPos[1];
        this.modal.form.inputGoals.value = strPlayerGoals[1];
        this.modal.form.inputAssists.value = strPlayerAssists[1];
        //hide add button
        this.modal.form.addCard.el.style.display = "none";
        //show modal
        this.onShowModal(e);
        //show save button
        this.modal.form.saveCard.el.style.display = "inline-block";
    }
    onSaveCard(e, btn, card) {
        e.preventDefault();
        console.log(btn);
        console.log(card);
        const valName = this.modal.form.inputName.value.trim() || "";
        const valNum = this.modal.form.inputNum.value.trim() || "";
        const valPosition = this.modal.form.inputPosition.value.trim() || "";
        const valGoals = Number(this.modal.form.inputGoals.value.trim()) || 0;
        const valAssists = Number(this.modal.form.inputAssists.value.trim()) || 0;
        console.log(valName, valNum, valPosition, valGoals, valAssists);
    }
}
const app = new App(document.querySelector("#app"));
