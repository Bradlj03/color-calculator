const prompt = require("prompt-sync")();
let option = Number(prompt("Please enter [1] for color combing, or [2] for color deconstruction: "));

if (option ===1){
        let color1 = (prompt("First color"));
        let color2 = (prompt("second color"));
        if (( color1 === "blue" && color2 === "red") || (color1 === "red" && color2 === "blue")){
                console.log("purple");
        } else if  (( color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")){
                console.log("orange");
        } else if (( color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")){
                console.log("green");
        } else console.log("Error")}

else if (option === 2){
        let color = (prompt("Color: "))

        if (color === "Purple"){
                console.log("red" + "blue")
        } else if (color === "orange"){
                console.log( "red" + "yellow")
        } else if (color === "green"){
                console.log( "blue" + "yellow")
        } else console.log("error")}