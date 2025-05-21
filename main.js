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

const characters = [];

let test = new Character(
    new Vector2D(0, 0),
    new Vector2D(0, 0),
    "./assets/fortnite.jpg",
    1
);

characters.push(test);

Mouse.onClick = function(){

}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    characters.forEach((item) => {
        item.render();
    });
    test.position = Mouse.position;
    requestAnimationFrame(gameLoop);
}

gameLoop();

new DialogueBox("Hello, welcome to my cool dialogue system! Press enter to advance", "white", "sans-serif", 20, function(){

new DialogueBox("With this engine, you can change the text's:", "white", "sans-serif", 20, function(){

new DialogueBox("color,", "lime", "sans-serif", 20, function(){

new DialogueBox("font,", "white", "papyrus", 20, function(){

new DialogueBox("speed,", "red", "sans-serif", 100, function(){

function funny(){
    document.body.style.backgroundColor = `rgb(${Math.sin(Date.now()/500)*127.5+127.5}, ${Math.sin(Date.now()/500 + (2*Math.PI/3))*127.5+127.5}, ${Math.sin(Date.now()/500 + (4*Math.PI/3))*127.5+127.5})`;
    requestAnimationFrame(funny);
}

funny();

new DialogueBox("and even what happens when the user closes the pop-up!", "blue", "sans-serif", 30, function(){



});

});

});

});

});

});




// let img = new Image();

// img.onload = function(){
//     ctx.drawImage(img, 100, 100, 100, 100);
// };

// img.src = "./assets/fortnite.jpg";
// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 100, 100);
//test.glideTo(new Vector2D(1000, -1000), 20);