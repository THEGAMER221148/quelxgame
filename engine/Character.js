import Vector2D from "./Vector2D.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export default class Character {
    constructor(position, image, size, onInteract){
        this.position = position;
        this.velocity = new Vector2D(0, 0);
        this.size = size;
        
        let ts = document.createElement("img");
        ts.src = image;
        ts.style.position = "fixed";
        ts.style.left = position.x + "px";
        ts.style.bottom = position.y + "px";
        let htis = this;
        document.body.appendChild(ts);
        this.element = ts;
        this.onInteract = onInteract;

        return this;
    }

}