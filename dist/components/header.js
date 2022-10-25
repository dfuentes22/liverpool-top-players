export class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `      
            <section id="header">
                <h1>Liverpool Top Player</h1>
            </section>        
        `;
    }
}
