import Vector2D from "./Vector2D.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export default class Character {
    constructor(position, velocity, image, size, onInteract){
        this.position = position;
        this.velocity = velocity;
        this.size = size;
        
        let ts = document.createElement("img");
        ts.src = image;
        ts.style.position = "fixed";
        ts.style.left = this.position.x + "px";
        ts.style.bottom = this.position.y + "px";
        let htis = this;
        document.body.appendChild(ts);
        this.element = ts;

        function render(){
            ts.style.left = htis.position.x + "px";
            ts.style.bottom = htis.position.y + "px";
            ts.style.width = htis.size.x + "px";
            ts.style.height = htis.size.y + "px";
            requestAnimationFrame(render);
        }

        render();

        if(typeof onInteract == "function"){
            window.addEventListener("keydown", function(event){
                if(event.key.toLowerCase() == 'e'){
                    onInteract();
                }
            });
        }
    }

}