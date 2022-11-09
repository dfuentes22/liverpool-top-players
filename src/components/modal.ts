import { App } from "../app.js";
import { Form } from "./form.js";

export class Modal {
    app: App;
    elWrap: HTMLDivElement;
    form: Form;
    el: HTMLDivElement;
    elHeader: HTMLElement;
    elTitle: HTMLHeadingElement;
    elBody: HTMLElement;

    constructor(app: App) {
        this.app = app;
        this.form = new Form(this.app);
        this.elWrap = document.createElement("div");
        this.el = document.createElement("div");
        this.elHeader = document.createElement("header");
        this.elTitle = document.createElement("h3");
        this.elBody = document.createElement("section");
        
        this.elWrap.classList.add("modal-wrap");
        this.el.classList.add("modal");
        this.elHeader.classList.add("modal-header");
        this.elTitle.classList.add("modal-title");
        this.elBody.classList.add("modal-body");

        this.elHeader.append(this.elTitle);
        this.elBody.append(this.form.el);
        this.el.append(this.elHeader, this.elBody);
        this.elWrap.append(this.el);
    }
}