export class playerCard extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        const div = document.createElement('div');
        const btnEdit = document.createElement('button');
        const btnDel = document.createElement('button');
        const form = document.querySelectorAll('player-card');

        div.classList.add('player-card-actions');
        btnEdit.classList.add("btn-player-edit")
        btnDel.classList.add("btn-player-delete")

        btnEdit.textContent = 'Edit';
        btnDel.textContent = 'Delete';

        this.deleteCard(btnDel);

        btnEdit.addEventListener('click', () => {
            console.log(form);
        })

        this.innerHTML = `      

            <h4 class="player-name">${this.getAttribute('name')}</h4>
            <ul class="player-info">
                <li>Num: ${this.getAttribute('kitNumber')}</li>
                <li>Position: ${this.getAttribute('position')}</li>
                <li>Goals: ${this.getAttribute('goals')}</li>
                <li>Assists: ${this.getAttribute('assists')}</li>
            </ul>    
        `;

        div.append(btnEdit);
        div.append(btnDel)
        this.append(div);

    }

    deleteCard(btnDel: HTMLButtonElement) {
        btnDel.addEventListener('click', () => {
            this.remove();
            btnDel.remove();
        })
    }
}