import Vector2D from "./Vector2D.js";
const Mouse = {
    position:new Vector2D(0, 0),
    down:false,
    onClick: function(){

    }
}

window.addEventListener("mousemove", function(event){
    Mouse.position.x = event.clientX;
    Mouse.position.y = window.innerHeight-event.clientY;
});
window.addEventListener("mousedown", function(event){
    Mouse.position.x = event.clientX;
    Mouse.position.y = window.innerHeight-event.clientY;
    Mouse.down = true;
    Mouse.onClick();
});
window.addEventListener("mouseup", function(event){
    Mouse.position.x = event.clientX;
    Mouse.position.y = window.innerHeight-event.clientY;
    Mouse.down = false;
});

export default Mouse;