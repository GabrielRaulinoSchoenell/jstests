let snakePos;
let snakeLastPos; // must contain snakeSize + 1 items
let snakeSize;
let velocity;
let eaten;
let points;
let playing;

function startGame()
{
    snakePos        = {width: 31, height: 10};
    snakeLastPos    = [{width: 30, height: 10}, {width: 0, height: 10} ]; // must contain snakeSize + 1 items
    snakeSize       = 1;
    velocity        = 50;
    eaten           = false;
    points          = 0;

    move.right();

    painel.style.display = 'none';
    playing = true;

    let squares = document.querySelectorAll('.square');
    squares.forEach((el)=>{
        el.style.backgroundColor = 'white';
    });

    
generateFood();

}

let painel          = document.querySelector('.painel');

painel.setAttribute('style', 'width:' + mapLength.width * 10+ 'px; height: ' + mapLength.height * 10 + 'px');

let startButton     = document.querySelector('.play');

startButton.addEventListener('click', startGame);



function randomColor()
{
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);

    let definition = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';

    return 'green';
}

function generateFood()
{
    let positionX = Math.floor(Math.random() * mapLength.width);
    let positionY = Math.floor(Math.random() * mapLength.height);

    let food = document.getElementById(positionX + '-' + positionY);
    food.setAttribute('style', 'background-color: red');
}


function renderSnake()
{


    if(!playing)
    {
        painel.style.display = 'flex';
        painel.children[0].innerHTML = "you ded";

        clearIntervals();
        return 0;
    }

    let width   = snakePos.width.toString();
    let height  = snakePos.height.toString();

    let lastWidth   = snakeLastPos[0].width.toString();
    let lastHeight  = snakeLastPos[0].height.toString();

    
    if(width > mapLength.width || height > mapLength.height || width < 0 || height < 0)
    {   
        painel.style.display = 'flex';
        painel.children[0].innerHTML = "YOU ded by the wall";

        clearIntervals();
        return 0;
    }
    


    let snake = document.getElementById(width + "-" + height);

    snakeLastPos.forEach((item, key)=>{
        let snakeBody = item.width + '-' + item.height;

        if(snake.id == snakeBody)
        {
            playing = false;
        }
    });

    if(snake.style.backgroundColor == 'red')// não mude a cor
    {
        eaten = true;  
        points++;
        let pointsDisplay = document.querySelector('.points');
        pointsDisplay.innerHTML = points;
        
        generateFood();
    }


    let erase = document.getElementById(lastWidth + "-" + lastHeight);


    snake.style.backgroundColor = randomColor();
    snake.style.border = '1px solid #000';
    erase.style.backgroundColor = 'white';
    erase.style.border = '0';

    if(!eaten)
    {
        snakeLastPos.shift();
    }

        
    eaten = false;

    snakeLastPos.push({width, height});
    


}


let moveUp;
let moveDown;
let moveLeft;
let moveRight;

let inMov = [0,0,0,0]; // up, down, left, right

function clearIntervals()
{
    clearInterval(moveDown);
    clearInterval(moveLeft);
    clearInterval(moveRight);
    clearInterval(moveUp);
}

let move = {

    up: ()=>{
        if(!inMov[0])
        {
            clearIntervals();
            moveUp = setInterval(()=>{
                snakePos.height--
                renderSnake();
            }, velocity);

            inMov = [1,0,0,0];
        }

    },
    down: ()=>{
        if(!inMov[1])
        {
            clearIntervals();
            moveDown = setInterval(()=>{
                snakePos.height++
                renderSnake();
            }, velocity);

            inMov = [0,1,0,0];
        }
    },
    left: ()=>{
        if(!inMov[2])
        {
            clearIntervals();
            moveLeft = setInterval(()=>{
                snakePos.width--
                renderSnake();
            }, velocity);   

            
            inMov = [0,0,1,0];
        }
    },
    right: ()=>{
        if(!inMov[3])
        {
            clearIntervals();
            moveRight = setInterval(()=>{
                snakePos.width++
                renderSnake();
            }, velocity);

            
            inMov = [0,0,0,1];
        }
    },
}



document.addEventListener('keydown', (e)=>{
    if(playing){
        switch(e.key){
            case 'ArrowUp': move.up();
                break;
            case 'ArrowDown': move.down();
                break;
            case 'ArrowLeft': move.left();
                break;
            case 'ArrowRight': move.right();
        }
    } 
})