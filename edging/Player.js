import Character from "./Character.js";

class keySet {
    constructor(up, left, down, right, interact, attack){
        this.up = up;
        this.left = left;
        this.right = right;
        this.down = down;
        this.interact = interact;
        this.attack = attack;
    }
}

class Player extends Character {
    constructor(position, image, size, keys){
        let ts = super(position, image, size);
        this.spawnLocation = position;
        this.keys = keys;
        console.log(this.position);

        this.speed = 8;

        // function move(){
        //     if(keysDown[keysDown.up]){
        //         ts.velocity.y += speed;
        //     }
        //     if(keysDown[keysDown.down]){
        //         ts.velocity.y -= speed;
        //     }
        //     if(keysDown[keysDown.right]){
        //         ts.velocity.x += speed;
        //     }
        //     if(keysDown[keysDown.left]){
        //         ts.velocity.x -= speed;
        //     }
        //     ts.velocity.x /= 1.5;
        //     ts.velocity.y /= 1.5;
        //     ts.position = ts.position.add(ts.velocity);
        //     requestAnimationFrame(move);
        // }

        // move();
    }
}

export {Player, keySet};