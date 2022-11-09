import { App } from "../app.js";

export class CardList {
    app: App;
    el: HTMLDivElement;

    constructor(app: App) {
        this.app = app;
        this.el = document.createElement("div");
        this.el.id = "player-list";
    }
}