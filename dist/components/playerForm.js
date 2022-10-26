import { CustomButton } from "./button.js";
export class playerForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const modal = document.querySelector(".modal-wrap");
        const AddButton = new CustomButton("Add Player", "btn-player-add", "btn-add");
        const SaveButton = new CustomButton("Save & Update", "btn-player-save", "btn-save");
        const CancelButton = new CustomButton("Cancel", "btn-player-cancel", "btn-cancel");
        const btnAddEl = AddButton.render();
        const btnSaveEl = SaveButton.render();
        const btnCancelEl = CancelButton.render();
        this.innerHTML = `      
        
        <div class="field">
        <label>Name:</label>
        <input type="text" id="player-info-name">
        </div>
        <div class="field">
        <label>Number:</label>
        <input type="text" id="player-info-number">
        </div>
        <div class="field">
        <label>Position:</label>
        <input type="text" id="player-info-position">
        </div>            
        <div class="field">
        <label>Goals:</label>
        <input type="text" id="player-info-goals">
        </div>            
        <div class="field">
        <label>Assists:</label>
        <input type="text" id="player-info-assists">
        </div> 
        `;
        this.addCard(btnAddEl, modal);
        this.cancelForm(btnCancelEl, modal);
        this.append(btnAddEl, btnSaveEl, btnCancelEl);
    }
    addCard(btnAdd, modal) {
        const playerList = document.querySelector('#player-list');
        const inputName = document.querySelector("#player-info-name");
        const inputNumber = document.querySelector("#player-info-number");
        const inputPosition = document.querySelector("#player-info-position");
        const inputGoals = document.querySelector("#player-info-goals");
        const inputAssists = document.querySelector("#player-info-assists");
        // const cards: PlayerCard[] = [];
        btnAdd.addEventListener('click', () => {
            const cardEl = document.createElement('player-card');
            cardEl.setAttribute("name", inputName.value);
            cardEl.setAttribute("kitNumber", inputNumber.value);
            cardEl.setAttribute("position", inputPosition.value);
            cardEl.setAttribute("goals", inputGoals.value);
            cardEl.setAttribute("assists", inputAssists.value);
            if (!inputName.value || inputName.value.trim().length === 0) {
                return false;
            }
            else {
                playerList.append(cardEl);
                //Close Modal
                modal.style.display = "none";
                //Empty Strings
                inputName.value = "";
                inputNumber.value = "";
                inputPosition.value = "";
                inputGoals.value = "";
                inputAssists.value = "";
            }
        });
    }
    cancelForm(btnCancel, modal) {
        //close modal
        btnCancel.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
}
