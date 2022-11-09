import { Button } from "./button.js";
export class Card {
    constructor(playerName, playerNum, playerPosition, playerGoals, playerAssists, app) {
        this.app = app;
        this.playerName = playerName;
        this.playerNum = playerNum;
        this.playerPosition = playerPosition;
        this.playerGoals = playerGoals;
        this.playerAssists = playerAssists;
        this.el = document.createElement("div");
        this.h4 = document.createElement("h4");
        this.ul = document.createElement("ul");
        this.cardActions = document.createElement("div");
        this.btnEdit = new Button("edit card", this.app.onShowModal.bind(this.app), app, { cssClasses: ["btn-player-edit"] }); //update to edit card event
        this.btnDel = new Button("delete card", this.app.onDeleteCard.bind(this.app), app, { cssClasses: ["btn-player-delete"] }); //update to delete card event
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
        `;
        this.el.append(this.h4);
        this.el.append(this.ul);
        this.cardActions.append(this.btnEdit.el);
        this.cardActions.append(this.btnDel.el);
        this.el.append(this.cardActions);
    }
}
