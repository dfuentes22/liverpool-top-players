import { App } from "../app.js";

export class Button {
    app: App;
    label: string;
    el: HTMLButtonElement;
    clickCb: CallableFunction;

    constructor(label: string, clickCallBack: CallableFunction, app: App, options = {cssClasses: ["btn"]}) {
        this.app = app;
        this.label = label;
        this.el = document.createElement("button");
        this.clickCb = clickCallBack.bind(this);
        this.el.addEventListener("click", this.onClick.bind(this));
        this.el.textContent = this.label;
        options.cssClasses.forEach((cssClass) => this.el.classList.add(cssClass));
    }

    onClick = (e: Event) => {
        this.clickCb(e, this);
    }
}