export class Button {
    constructor(label, clickCallBack, app, options = { cssClasses: ["btn"] }) {
        this.app = app;
        this.label = label;
        this.el = document.createElement("button");
        this.clickCb = clickCallBack.bind(this);
        this.el.addEventListener("click", this.onClick.bind(this));
        this.el.textContent = this.label;
        options.cssClasses.forEach((cssClass) => this.el.classList.add(cssClass));
    }
    onClick(e) {
        this.clickCb(e, this);
        console.log(this);
    }
}
