import Vector2D from "./Vector2D.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export default class Character {
    constructor(position, velocity, image, scaleFactor){
        this.position = position;
        this.velocity = velocity;
        this.image = new Image();
        this.image.src = image;
        this.scale = scaleFactor;
        //create htmelement
        // let ts = document.createElement("img");
        // ts.src = image;
        // ts.style.position = "fixed";
        // ts.style.left = this.pos.x;
        // ts.style.bottom = this.pos.y;
        // document.body.appendChild(ts);
        // this.element = ts;
    }

    render(){
        ctx.drawImage(this.image, this.position.x, -this.position.y, this.image.width*this.scale, this.image.height*this.scale);
    }

    // glideTo(pos, time){
    //     if(this.pos.distanceTo(pos) > 10){
    //         this.pos = this.pos.add(pos.subtract(this.pos).divide(new Vector2D(time*60, time*60)));
    //         this.render();
    //         setTimeout(() => {
    //             this.glideTo(pos, time);
    //         }, 16);
    //     }
    // }

}