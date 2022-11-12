import { Button } from "./button.js";
export class Form {
    constructor(app) {
        this.onChange = () => {
            console.log(this.inputName.value);
        };
        this.app = app;
        this.el = document.createElement("form");
        this.inputName = document.createElement("input");
        this.inputNum = document.createElement("input");
        this.inputPosition = document.createElement("input");
        this.inputGoals = document.createElement("input");
        this.inputAssists = document.createElement("input");
        this.addCard = new Button("Add Card", this.app.onAddCard.bind(this.app), app, { cssClasses: ["btn-add"] });
        this.saveCard = new Button("Save Card", this.app.onSaveCard.bind(this.app), app, { cssClasses: ["btn-save"] });
        this.cancelCard = new Button("Cancel", this.app.onCancelCard.bind(this.app), app, { cssClasses: ["btn-cancel"] });
        //placeholders
        this.inputName.placeholder = "player name";
        this.inputNum.placeholder = "player number";
        this.inputPosition.placeholder = "player position";
        this.inputGoals.placeholder = "player goals";
        this.inputAssists.placeholder = "player assists";
        //add inputs to form
        this.el.append(this.inputName);
        this.el.append(this.inputNum);
        this.el.append(this.inputPosition);
        this.el.append(this.inputGoals);
        this.el.append(this.inputAssists);
        this.el.append(this.addCard.el);
        this.el.append(this.saveCard.el);
        this.el.append(this.cancelCard.el);
    }
}
