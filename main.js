import DialogueBox from "./edging/DialogueBox.js";
import Character from "./edging/Character.js";
import Vector2D from "./edging/Vector2D.js";

let amogus = new DialogueBox("albuquerque is very albuquerqizing", "sans-serif", 20);
setTimeout(() => {
    amogus.remove();
}, 2000);

let test = new Character(
    new Vector2D(0, 0),
    new Vector2D(0, 0),
    "./assets/fortnite.gif",
    function(){
        console.log("created!");
        this.glideTo(new Vector2D(1000, 1000), 20);
    },
    function(){
        console.log("interacted!");
        test.glideTo(new Vector2D(1000, 1000), 20);
    },
    1
);