export class CustomButton {
    constructor(text, id, className) {
        this.text = text;
        this.id = id;
        this.className = className;
    }
    render() {
        const btn = document.createElement('button');
        btn.innerText = this.text;
        btn.id = this.id;
        btn.classList.add(this.className);
        return btn;
    }
}
