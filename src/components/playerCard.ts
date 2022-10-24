export class playerCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `      
        <div class="player-card">
            <h4 class="player-name">${this.getAttribute('name')}</h4>
            <ul class="player-info">
                <li>Num: ${this.getAttribute('kitNumber')}</li>
                <li>Position: ${this.getAttribute('position')}</li>
                <li>Goals: ${this.getAttribute('goals')}</li>
                <li>Assists: ${this.getAttribute('assists')}</li>
            </ul>
            <div class="player-card-actions">
                <button class="btn-player-edit">Edit</button>
                <button class="btn-player-delete">Delete</button>
            </div>
        </div>        
        `;
    }
}