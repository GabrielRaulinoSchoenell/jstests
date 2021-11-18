let box = document.querySelector('.box');
let random = document.querySelector('.random');

let number = Math.floor(Math.random() * 16777216);
let hexa = number.toString(16);
hexa += (hexa.length < 6) ? 0 : ''; //due to a bug i found (and didn't find another way)

random.id = '#'+hexa;

let buttons = document.querySelectorAll('.change-color');

buttons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        document.body.style.setProperty('--background', item.id);
    });
});