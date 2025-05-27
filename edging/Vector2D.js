export default class Vector2D {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    magnitude(){
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    }
    distanceTo(pos2){
        return Math.sqrt(((this.x-pos2.x)*(this.x-pos2.x)) + ((this.y-pos2.y)*(this.y-pos2.y)));
    }
    toString(){
        return this.x + "," + this.y;
    }
    vectorDirection(){
        return Math.atan(this.y/this.x);
    }
    add(otherVector){
        return new Vector2D(this.x + otherVector.x, this.y + otherVector.y);
    }
    subtract(otherVector){
        return new Vector2D(this.x - otherVector.x, this.y - otherVector.y);
    }
    multiply(otherVector){
        return new Vector2D(this.x * otherVector.x, this.y * otherVector.y);
    }
    divide(otherVector){
        return new Vector2D(this.x / otherVector.x, this.y / otherVector.y);
    }
    returnCopy(){
        return new Vector2D(this.x, this.y);
    }
}