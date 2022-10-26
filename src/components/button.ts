export class CustomButton{
    text: string;
    id: string;
    className: string;

    constructor(text:string, id:string, className:string) {
        this.text = text;
        this.id = id;
        this.className = className;
    }

    render() {
        const btn = document.createElement('button');
        btn.innerText = this.text;
        btn.id = this.id
        btn.classList.add(this.className);

        return btn
    }
}