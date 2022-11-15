import { App } from "../app.js";
import { PlayerData } from "../models/playerData.js";
import { Button } from "./button.js";

export class Form {
    app: App;
    el: HTMLFormElement;
    addCard: Button;
    cancelCard: Button;
    saveCard: Button;
    inputs: {
        name: {el:HTMLInputElement},
        number: {el:HTMLInputElement},
        position: {el:HTMLInputElement},
        goals: {el:HTMLInputElement},
        assists: {el:HTMLInputElement},
        details: {el:HTMLTextAreaElement}

    };

    constructor(app: App) {
        this.app = app;
        this.inputs = {
            name: {el:document.createElement("input")},
            number: {el:document.createElement("input")},
            position: {el:document.createElement("input")},
            goals: {el:document.createElement("input")},
            assists: {el:document.createElement("input")},
            details: {el:document.createElement("textarea")}
        };
        this.el = document.createElement("form");
        this.addCard = new Button("Add Card", (e: Event) => {
            this.app.onAddCard(e, this.getPlayerDataFromForm())
        }, app, {cssClasses:["btn-add", "btn-disabled"]});
        this.saveCard = new Button("Save Card", this.app.onSaveCard.bind(this.app), app, {cssClasses:["btn-save", "btn-disabled"]});
        this.cancelCard = new Button("Cancel", this.app.onCancelCard.bind(this.app), app, {cssClasses:["btn-cancel"]});

        //disable buttons
        this.addCard.el.disabled = true;
        this.saveCard.el.disabled = true;

        //placeholders
        this.inputs.name.el.placeholder = "player name";
        this.inputs.number.el.placeholder = "player number";
        this.inputs.position.el.placeholder = "player position";
        this.inputs.goals.el.placeholder = "player goals";
        this.inputs.assists.el.placeholder = "player assists";
        this.inputs.details.el.placeholder = "player details";

        console.log(Object.keys(this.inputs));

        (Object.keys(this.inputs) as (keyof typeof this.inputs)[]).forEach((key) => {
            this.el.append(this.inputs[key].el);
            //console.log(key, this.inputs[key].el, index);
        })

        this.el.append(this.addCard.el);
        this.el.append(this.saveCard.el);
        this.el.append(this.cancelCard.el);
    }

    getPlayerDataFromForm():PlayerData {
        
        const playerData: PlayerData = {
            name: "",
            number: 0,
            position: "",
            goals: 0,
            assists: 0,
            details: ""
        };


        (Object.keys(this.inputs) as (keyof typeof this.inputs)[]).forEach((key) => {
            playerData[key] = this.inputs[key].el.value ;
            console.log(`player data: ${this.inputs[key].el.value}`);
        })

   
        return playerData;

        // return {
        //     name: this.inputName.value,
        //     number: this.inputNum.value,
        //     position: this.inputPosition.value,
        //     goals: Number(this.inputGoals.value),
        //     assists: Number(this.inputAssists.value),
        //     details: this.inputDetails.value
        // }
    }
}