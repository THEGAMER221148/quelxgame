import DialogueBox from "./engine/DialogueBox.js";
import Character from "./engine/Character.js";
import Vector2D from "./engine/Vector2D.js";
import Mouse from "./engine/Mouse.js";
import Level from "./engine/Level.js";
import { Player, keySet } from "./engine/Player.js";
import Camera from "./engine/Camera.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;

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

let plr1 = new Player(
    new Vector2D(500, 500), //position
    "./assets/am-.gif", //image
    new Vector2D(100, 100), //size
    new keySet("w", "a", "s", "d", "e", "q") //keyset
);

let currentCam = new Camera(new Vector2D(0, 0), plr1);
const lvl1 = new Level("./assets/level1.png", 64, [plr1], currentCam);

const players = [
    plr1
];

function stepPlayers(){
    players.forEach((item) => {

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

let currentLevel = lvl1;

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stepPlayers();
    currentCam.stepEaseToSubject(10);
    lvl1.render();
    requestAnimationFrame(gameLoop);
}

gameLoop();

export {currentLevel};