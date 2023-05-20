let count = 0;
let variable = document.getElementById("count-var");
let his = document.getElementById("count-his");

function increment(){
    count = count + 1;
    variable.textContent = count;
}

function save(){
    his.textContent += count + " - ";
}

function reset(){
    his.textContent = "History : ";
    variable.textContent = 0;
    count = 0;
}