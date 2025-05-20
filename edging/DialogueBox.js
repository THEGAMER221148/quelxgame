export default class DialogueBox {
    constructor(text, font, delay){
        let box = document.createElement("div");
        box.style.position = "fixed";
        box.style.height = "30%";
        box.style.width = "90%";
        box.style.left = "5%";
        box.style.bottom = "5%";
        box.style.color = "white";
        box.style.backgroundColor = "black";
        box.style.borderWidth = "10px";
        box.style.borderStyle = "solid";
        box.style.borderColor = "grey";
        box.style.marginLeft = "-10px";
        box.style.marginBottom = "-10px";
        box.style.fontSize = "4vh";
        box.style.fontFamily = font;
        document.body.append(box);
        this.box = box;
        
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

    remove(){
        document.body.removeChild(this.box);
    }
}