export class playerForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const btnAdd = document.createElement('button');
        const btnSave = document.createElement('button');
        const btnCancel = document.createElement('button');
        btnAdd.textContent = 'Add';
        btnSave.textContent = 'Save';
        btnCancel.textContent = 'Cancel';
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
                    <input type="text" id="player-info-Assists">
                </div>            
                <button id="btn-player-add" class="btn-add">Add</button>
                <button id="btn-player-save" class="btn-save">Save</button>  
                <button id="btn-player-cancel" class="btn-cancel">Cancel</button>  
 
        `;
        this.append(btnAdd, btnSave, btnCancel);
    }
}
