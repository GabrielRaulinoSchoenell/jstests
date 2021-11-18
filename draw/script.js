let active = 'black';
let colors = document.querySelectorAll('.color');
let canvas = document.querySelector('#tela');
let context = canvas.getContext('2d');
let drawing = false;
let mouseX = 0;
let mouseY =0;
let clear = document.querySelector('.clear');

let size = 10;
let sizeInput = document.querySelector('.size');
sizeInput.addEventListener('mouseup', ()=>{
    size = sizeInput.value;
});

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', ()=>{drawing = false})
clear.addEventListener('click', clearScreen);

colors.forEach((item)=>{
    item.addEventListener('click', colorClick);
})


//function
function colorClick(e){
    let item = e.target;
    let color = item.getAttribute('data-color');
    active = color;

    document.querySelector('.active').classList.remove('active');
    item.classList.add('active');
}
function mouseDown(e){
    drawing = true;
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
}

function mouseMove(e){
    if(drawing){
        let positionX = e.pageX - canvas.offsetLeft;
        let positionY = e.pageY - canvas.offsetTop;
        draw(positionX, positionY);
    }
}

function draw(x,y){
    context.beginPath();
    context.lineWidth = size;
    context.lineJoin = 'round';
    context.moveTo(mouseX, mouseY);
    context.lineTo(x,y);
    context.closePath();
    context.strokeStyle = active;
    context.stroke();

    mouseX = x;
    mouseY = y;
}

function clearScreen(){
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
}