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
    addObject(obj) {
        this.el.append(obj);
    }
    onShowModal(e) {
        e.preventDefault();
        //set modal to display flex
        this.modal.elWrap.style.display = "flex";
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
    }
    onAddCard(e) {
        e.preventDefault();
        console.log("add card");
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
        if (valName) {
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
}
const app = new App(document.querySelector("#app"));
