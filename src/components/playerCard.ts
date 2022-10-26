import { CustomButton } from "./button.js";

export class playerCard extends HTMLElement {
    
    constructor() {
        super();    
    }
    
    connectedCallback() {
        const div = document.createElement('div');           
        const btnEdit = new CustomButton("Edit", "btnCardEdit", "btn-player-edit");
        const btnDel = new CustomButton("Delete", "btnCardDelete", "btn-player-delete");
        const btnDelEl = btnDel.render();
        const btnEditEl = btnEdit.render();

        div.classList.add('player-card-actions');

        this.editCard(btnEditEl);
        this.deleteCard(btnDelEl);

        this.innerHTML = `      

            <h4 class="player-name">${this.getAttribute('name')}</h4>
            <ul class="player-info">
                <li>Num: ${this.getAttribute('kitNumber')}</li>
                <li>Position: ${this.getAttribute('position')}</li>
                <li>Goals: ${this.getAttribute('goals')}</li>
                <li>Assists: ${this.getAttribute('assists')}</li>
            </ul>       
        `;

        div.append(btnEditEl);
        div.append(btnDelEl);
        this.append(div);
    }

    deleteCard(btnDel: HTMLButtonElement) {
        btnDel.addEventListener('click', () => {
            this.remove();
            btnDel.remove();
        })
    }

    editCard(btnEdit: HTMLButtonElement) {
        const  modal = document.querySelector(".modal-wrap") as HTMLElement;

        btnEdit.addEventListener('click', () => {
            modal.style.display = "flex";
        })
    }
}