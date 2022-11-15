import { App } from "../app.js";
import { Button } from "./button.js";

export class Card {
    app: App;
    playerName: string;
    playerNum: number;
    playerPosition: string;
    playerGoals: number;
    playerAssists: number;
    playerDetails: string;
    el: HTMLDivElement;
    h4: HTMLHeadingElement;
    ul: HTMLUListElement;
    cardActions: HTMLDivElement;
    btnEdit: Button;
    btnDel: Button;

    constructor(playerName:string, playerNum:number, playerPosition:string, playerGoals:number, playerAssists:number, playerDetails:string, app:App) {
        this.app = app;
        this.playerName = playerName;
        this.playerNum = playerNum;
        this.playerPosition = playerPosition;
        this.playerGoals = playerGoals;
        this.playerAssists = playerAssists;
        this.playerDetails = playerDetails;
        this.el = document.createElement("div");
        this.h4 = document.createElement("h4");
        this.ul = document.createElement("ul");
        this.cardActions = document.createElement("div");
        this.btnEdit = new Button("edit", this.app.onEditCard.bind(this.app), app, {cssClasses:["btn-player-edit"]});//update to edit card event
        this.btnDel = new Button("delete", this.app.onDeleteCard.bind(this.app), app, {cssClasses:["btn-player-delete"]});//update to delete card event

        this.el.classList.add("player-card");
        this.h4.classList.add("player-name");
        this.ul.classList.add("player-info");
        this.cardActions.classList.add("player-card-actions");

        this.h4.textContent = this.playerName;
        this.ul.innerHTML = `
            <li>Num: ${this.playerNum}</li>
            <li>Position: ${this.playerPosition}</li>
            <li>Goals: ${this.playerGoals}</li>
            <li>Assists: ${this.playerAssists}</li>
            <li>Details: ${this.playerDetails}</li>
        `;

        this.el.append(this.h4);
        this.el.append(this.ul);
        this.cardActions.append(this.btnEdit.el);
        this.cardActions.append(this.btnDel.el);
        this.el.append(this.cardActions);
    }
}