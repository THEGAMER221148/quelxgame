import Vector2D from "./Vector2D.js";
export default class Character {
    constructor(position, velocity, image, onCreation, onInteract, scaleFactor){
        this.pos = position;
        this.velocity = velocity;
        this.image = image;
        this.onInteract = onInteract;
        //create htmelement
        let ts = document.createElement("img");
        ts.src = image;
        ts.style.position = "fixed";
        ts.style.left = this.pos.x;
        ts.style.bottom = this.pos.y;
        document.body.appendChild(ts);
        this.element = ts;
        //exec
        onCreation();
        console.log(onCreation);
    }

    render(){
        this.element.style.left = this.pos.x;
        this.element.style.bottom = this.pos.y;
    }

    glideTo(pos, time){
        if(this.pos.magnitude() > 10){
            this.pos = this.pos.add(pos.subtract(this.pos).divide(new Vector2D(time*60, time*60)));
            setTimeout(() => {
                this.glideTo(pos, time);
            }, 16);
        }
    }

}