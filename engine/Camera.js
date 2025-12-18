import Vector2D from "./Vector2D.js";

export default class Camera {
    constructor(position, subject){
        this.position = position
        this.subject = subject;
    }

    stepEaseToSubject(smoothness){
        this.position.x += (this.subject.position.x - this.position.x)/smoothness;
        this.position.y += (this.subject.position.y - this.position.y)/smoothness;
    }

    easeToSubject(smoothness){
        this.position.x += (this.subject.position.x - this.subject.size.x/2 - this.position.x)/smoothness;
        this.position.y += (this.subject.position.y - this.subject.size.y/2 - this.position.y)/smoothness;

        if(this.position.distanceTo(this.subject.position.subtract(new Vector2D(this.subject.x/2, -this.subject.y/2))) < 1){
            this.position = this.subject.position.returnCopy();
        }else{
            requestAnimationFrame(this.easeToSubject(smoothness));
        }
    }

    goTo(pos){
        this.position = pos.returnCopy();
    }
}