let box = document.querySelector('.box');
let random = document.querySelector('.random');

let number = Math.floor(Math.random() * 16777216);
random.id = '#'+number.toString(16);

let buttons = document.querySelectorAll('.change-color');

buttons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let value = document.body.style.setProperty('--background', item.id);
    });
});