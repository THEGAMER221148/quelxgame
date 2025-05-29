export default class Level {
    constructor(backgroundImage, backgroundScale, characters, currentCamera){
        this.bg = new Image();
        this.bg.src = backgroundImage;
        this.scale = backgroundScale;
        this.cam = currentCamera;
        this.chars = characters;
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = document.getElementById("gameCanvas").getContext("2d");
    }

    render(){
        this.ctx.drawImage(this.bg, window.innerWidth/2-this.cam.position.x, this.cam.position.y-window.innerHeight/2, this.bg.width * this.scale, this.bg.height * this.scale);
        this.chars.forEach((item) => {
            item.element.style.left = item.position.x - this.cam.position.x + window.innerWidth/2 - item.size.x/2 + "px";
            item.element.style.bottom = item.position.y - this.cam.position.y + window.innerHeight/2 + item.size.y/2 + "px";
            item.element.style.width = item.size.x + "px";
            item.element.style.height = item.size.y + "px";
        });
    }
}