let button = document.querySelector('.colorize');
let inputs = document.querySelectorAll('.color');
let square = document.querySelector('.square');
let increment = document.querySelector('.increment');
let incrementation = 0;
let start = false;

let redGrow = true;
let greenGrow = false;
let blueGrow = false;

colors = [255,255,255];

button.addEventListener('click', colorize);
square.addEventListener('click', animation);

function colorize(){
    inputs.forEach((item, key)=>{
        colors[key] = parseInt(item.value);
    });
    incrementation = parseInt(increment.value);
    square.style.backgroundColor = `rgb(${colors})`;
}


function animation(){
    


    if(colors[0] < 230 && redGrow){
        colors[0]+=incrementation;
    } else if(colors[0] >= 10){
        colors[0] -=incrementation;
        redGrow = false;
    } else{
        greenGrow = true;
        redGrow = true;
    }

    if(colors[1] < 230 && greenGrow){
        colors[1]+=incrementation;
    } else if(colors[1] >= 1){
        colors[1] -=incrementation;
        greenGrow = false;
    } else{
        greenGrow = true;
        blueGrow = true;
    }

    if(colors[2] < 230 && blueGrow){
        colors[2]+=incrementation;
    } else if(colors[2] >= 1){
        colors[2] -=incrementation;
        blueGrow = false;
    } else{
        blueGrow = true;
        redGrow = true;
    }

    square.style.backgroundColor = `rgb(${colors})`;
    square.style.boxShadow = `1px 1px 50px rgb(${colors})`;

    (!start) ? setInterval(animation, 95) : false;
    start = true;
}