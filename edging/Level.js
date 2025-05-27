export default class Level {
    constructor(backgroundImage, characters){
        this.bg = new Image();
        this.bg.src = backgroundImage;
        this.chars = characters;
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = document.getElementById("gameCanvas").getContext("2d");
    }

    render(){
        this.ctx.drawImage(this.bg, 100, 100);
        this.chars.forEach((item) => {
            item.element.style.left = item.position.x + "px";
            item.element.style.bottom = item.position.y + "px";
            item.element.style.width = item.size.x + "px";
            item.element.style.height = item.size.y + "px";
        });
    }
}