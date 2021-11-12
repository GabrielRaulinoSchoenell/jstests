let lights = document.querySelectorAll('.light');
let start = false;
let size;
let intensity;
let value = 160;
let growing = true;
let time;
let blinking = true;
let type = 0;

function costumize(size, intensity, type){
    let colors = [[0, intensity, 0], [intensity, 0, 0],
    [0, 0, intensity],[intensity, intensity, 0],
    [intensity, 0, intensity],[0, intensity, intensity]];


    let i = 0;
    setInterval(()=>{
        if(i < lights.length){

            lights[i].style.width = size + 'px';
            lights[i].style.height = size + 'px'; 
            lights[i].style.backgroundColor = "rgb("+colors[i]+")";

            for(let j = 0; j<3; j++){
                colors[i][j] -= 80;
            }

            lights[i].style.boxShadow = `inset 20px 20px 30px rgb(${colors[i]}), 1px 1px 80px rgb(${colors[i]})`;
            
            i +=1;
        }

    }, type * 50);
}
function blink(){

    (growing) ? value += 10 * time : value -= 10 * time;

    if(value > 250){
        growing = false;
    } else if(value < 100){
        growing = true;
    }

    if (start){         
        setTimeout(()=>{
            costumize(size, value, type);
            blink();
        }, time);
    }
}

document.querySelector('.button').addEventListener('click', ()=>{
    start = !start;
    blink();
})

document.addEventListener('mousemove', ()=>{
    size = document.querySelector('.size').value * 2;
    time = document.querySelector('.velocity').value / 100;
    type = document.querySelector('.type').value;
})

costumize(100, 175, 0);
