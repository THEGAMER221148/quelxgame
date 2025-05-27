import DialogueBox from "./edging/DialogueBox.js";
import Character from "./edging/Character.js";
import Vector2D from "./edging/Vector2D.js";
import Mouse from "./edging/Mouse.js";
import { Player, keySet } from "./edging/Player.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const keysDown = {};

window.addEventListener("keydown", (event) => {
    keysDown[event.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (event) => {
    keysDown[event.key.toLowerCase()] = false;
});

let test = new Character(
    new Vector2D(100, 100), //position
    "./assets/fortnite.gif", //image
    new Vector2D(100, 100), //size
    function(){
        new DialogueBox("$19 Fortnite card, ya want it?", "white", "Tiny5", 20, function(){
        new DialogueBox("And yes, I'm giving it away.", "white", "Tiny5", 20, function(){
        new DialogueBox("so remember,", "white", "Tiny5", 20, function(){
        new DialogueBox("share, share, share!", "lime", "Tiny5", 20, function(){
        new DialogueBox("And trolls...", "white", "Tiny5", 20, function(){
        new DialogueBox("Don't get blocked!", "red", "Tiny5", 20)
        });
        });
        });
        });
        });
    }
);

let plr1 = new Player(
    new Vector2D(500, 500), //position
    "./assets/am-.gif", //image
    new Vector2D(100, 100), //size
    new keySet("w", "a", "s", "d", "e", "q") //keyset
);

const players = [
    plr1
]

function stepPlayers(){
    players.forEach((item) => {
        item.element.style.left = item.position.x + "px";
        item.element.style.bottom = item.position.y + "px";
        item.element.style.width = item.size.x + "px";
        item.element.style.height = item.size.y + "px";

        if(keysDown[item.keys.up]){
            item.velocity.y += item.speed;
        }
        if(keysDown[item.keys.down]){
            item.velocity.y -= item.speed;
        }
        if(keysDown[item.keys.right]){
            item.velocity.x += item.speed;
        }
        if(keysDown[item.keys.left]){
            item.velocity.x -= item.speed;
        }

        item.velocity.x /= 1.5;
        item.velocity.y /= 1.5;
        item.position = item.position.add(item.velocity);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //test.position = test.position.add(Mouse.position.subtract(test.position).divide(new Vector2D(10, 10)));
    stepCharacters();
    stepPlayers();
    requestAnimationFrame(gameLoop);
}

gameLoop();

export {characters};