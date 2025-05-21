import Vector2D from "./Vector2D.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export default class Character {
    constructor(position, velocity, image, scaleFactor, onInteract){
        this.position = position;
        this.velocity = velocity;
        this.image = new Image();
        this.image.src = image;
        this.scale = scaleFactor;
        if(typeof onInteract == "function"){
            window.addEventListener("keydown", function(event){
                if(event.key.toLowerCase() == 'e'){
                    onInteract();
                }
            });
        }
        let ts = document.createElement("img");
        ts.src = image;
        ts.style.position = "fixed";
        ts.style.left = this.position.x + "px";
        ts.style.bottom = this.position.y + "px";
        let htis = this;

        function render(){
            ts.style.left = htis.position.x + "px";
            ts.style.bottom = htis.position.y + "px";
            requestAnimationFrame(render);
        }

        render();
        document.body.appendChild(ts);
        this.element = ts;
    }

}