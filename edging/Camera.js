import Vector2D from "./Vector2D";

export default class Camera {
    constructor(position, subject){
        this.position = position
        this.subject = subject;
    }

    easeToSubject(smoothness){
        this.position = this.position.add(new Vector2D((this.subject.position.x - this.position.x)/smoothness, (this.subject.position.y - this.position.y)/smoothness));

        if(this.position.distanceTo(this.subject.position) < 1){
            this.position = this.subject.position.returnCopy();
        }else{
            requestAnimationFrame(this.easeToSubject(smoothness));
        }
    }
}