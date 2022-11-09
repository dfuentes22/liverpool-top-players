import { Button } from "./components/button.js";
import { Card } from "./components/card.js";
import { CardList } from "./components/cardlist.js";
import { Form } from "./components/form.js";
import { Modal } from "./components/modal.js";


export class App {

    el: HTMLElement;
    showBtn: Button;
    modal: Modal;
    form: Form;
    cardList: CardList;

    constructor(el: HTMLElement) {
        this.el = el;
        this.modal = new Modal(this);
        this.form = new Form(this);
        this.cardList = new CardList(this);  
        this.showBtn = new Button("Add Player", this.onShowModal.bind(this), this, {cssClasses:["btn-show-modal"]});

        this.addObject(this.showBtn.el);
        this.addObject(this.cardList.el);
        this.addObject(this.modal.elWrap);
    }

    addObject(obj:HTMLElement){
        this.el.append(obj);
    }

    onShowModal(e:Event) {
        e.preventDefault();

        //set modal to display flex
        this.modal.elWrap.style.display = "flex";
    }

    onCancelCard(e:Event) {
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

    onAddCard(e:Event) {
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

        if(valName) {
            const newCard = new Card(
                valName,
                valNum,
                valPosition,
                valGoals,
                valAssists,
                this
            );

            this.cardList.el.append(newCard.el);
            this.modal.elWrap.style.display = "none";
        } else {
            return;
        }
    }

    onDeleteCard(e:Event, btn:Button) {
        e.preventDefault();

        //get card
        const card = btn.el.parentNode?.parentNode as HTMLElement;
        card.remove();
    }
}

const app = new App(document.querySelector("#app") as HTMLElement);