const prompt=require("prompt-sync")({sigint:true}); 

function greetUser(){
    let name = prompt("Please enter your Name: ");
    if(name == ""){
        name = "Guest";
    }
    console.log("Hello, " + name + "!");
}
greetUser();