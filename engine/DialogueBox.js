export default class DialogueBox {
    constructor(text, color, font, delay, onRemove){
        let box = document.createElement("div");
        box.style.position = "fixed";
        box.style.height = "30%";
        box.style.width = "90%";
        box.style.left = "5%";
        box.style.bottom = "5%";
        box.style.color = color;
        box.style.backgroundColor = "black";
        box.style.borderWidth = "10px";
        box.style.borderStyle = "solid";
        box.style.borderColor = "white";
        box.style.marginLeft = "-10px";
        box.style.marginBottom = "-10px";
        box.style.fontSize = "4vh";
        box.style.fontFamily = font;
        document.body.append(box);
        this.box = box;

        let listenerFunction = function(event){
            console.log(event.key.toLowerCase());
            if(event.key.toLowerCase() == "enter"){
                window.removeEventListener("keypress", listenerFunction);

                let up = function(event){
                    if(event.key.toLowerCase() == "enter"){
                        window.removeEventListener("keyup", up);
                        document.body.removeChild(box);
                        if(typeof onRemove == "function"){onRemove()};
                    }
                }

                window.addEventListener("keyup", up);
            }else if(event.key.toLowerCase() == "q"){
                window.removeEventListener("keypress", listenerFunction);
                document.body.removeChild(box);
            }
        };

        window.addEventListener("keypress", listenerFunction);
        
        function speak(dialogue){
            if(dialogue.length > 0){
                box.innerHTML += dialogue.charAt(0);
                dialogue = dialogue.substring(1, dialogue.length);
                setTimeout(() => {
                    speak(dialogue);
                }, delay);
            }
        }

        speak(text);
    }
}