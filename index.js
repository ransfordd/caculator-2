
const display = document.getElementById("display");


function appendTodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "error";
    }
    
}

function clearEntry(input){
    display.value = (display.value).slice(0, -1);
}