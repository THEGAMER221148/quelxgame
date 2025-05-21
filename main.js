import DialogueBox from "./edging/DialogueBox.js";
import Character from "./edging/Character.js";
import Vector2D from "./edging/Vector2D.js";
import Mouse from "./edging/Mouse.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let test = new Character(
    new Vector2D(100, 100), //position
    new Vector2D(0, 0), //velocity
    "./assets/fortnite.gif", //image
    new Vector2D(100, 100), //size
);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    test.position = test.position.add(Mouse.position.subtract(test.position).divide(new Vector2D(10, 10)));
    requestAnimationFrame(gameLoop);
}

gameLoop();

new DialogueBox("Hello, welcome to my cool dialogue system! Press enter to advance", "white", "Tiny5", 20, function(){

new DialogueBox("With this engine, you can change the text's:", "white", "Tiny5", 20, function(){

new DialogueBox("color,", "lime", "Tiny5", 20, function(){

new DialogueBox("font,", "white", "papyrus", 20, function(){

new DialogueBox("speed,", "red", "Tiny5", 100, function(){

let then = Date.now();

function funny(){
    document.body.style.backgroundColor = `rgb(${Math.sin(Date.now()/500)*127.5+127.5}, ${Math.sin(Date.now()/500 + (2*Math.PI/3))*127.5+127.5}, ${Math.sin(Date.now()/500 + (4*Math.PI/3))*127.5+127.5})`;
    test.size = new Vector2D(Math.sin(Date.now()/500)*100 + 100, Math.cos(Date.now()/500)*100 + 100);
    if(Date.now() - then < 10000){
        requestAnimationFrame(funny);
    }else{
        document.body.style.backgroundColor = "black";
        test.size = new Vector2D(100, 100);
    }
}

funny();

new DialogueBox("and even what happens when the user closes the pop-up!", "blue", "Tiny5", 30, function(){

new DialogueBox("You can also stack dialogue boxes, but I don't reccomend it.", "white", "Tiny5", 20, function(){

new DialogueBox("It can be useful for", "white", "Tiny5", 20, function(){});
setTimeout(() => {
    new DialogueBox("cutscenes", "white", "Tiny5", 20, function(){});
    setTimeout(() => {
        new DialogueBox("like", "white", "Tiny5", 20, function(){});
        setTimeout(() => {
            new DialogueBox("this", "white", "Tiny5", 20, function(){

new DialogueBox("Anyway, I hope this gets put to good use", "white", "Tiny5", 20, function(){

new DialogueBox("It's versitile, straightforward, and pretty bug-free", "white", "Tiny5", 20, function(){

new DialogueBox("bye!", "white", "Tiny5", 20);
});
});
});
        }, 500);
    }, 500);
}, 500);
});
});
});
});
});
});
});