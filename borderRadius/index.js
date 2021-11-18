let switcher = document.querySelectorAll('.switch');
let box = document.querySelector('.box');
let started = false;
const distanceCorrectionLeft = 370;
const distanceCorrectionRight = 1370;
let cssStructure = [
    'border-top-left-radius: 0px',
    'border-top-right-radius: 0px',
    'border-bottom-left-radius: 0px', 
    'border-bottom-right-radius: 0px'
]



switcher.forEach((item)=>{
    item.addEventListener('mousedown', swipeStart)
    item.addEventListener('mousemove', swipeMove);
});

document.addEventListener('mouseup', swipeEnd);
document.querySelector('.copy').addEventListener('click', getCss);


function swipeStart(e){
    started = true;    
}
function swipeMove(e){
    let sideDefinition = e.target.classList[1];

    let radiusLeft = e.clientX - distanceCorrectionLeft;
    let radiusRight = e.clientX - distanceCorrectionRight;


    if(started){ // i tried to make it without switch but, well, switch is right above
        switch(sideDefinition){
            case 'borderTopLeftRadius': 
                box.style.borderTopLeftRadius = radiusLeft + 'px';
                cssStructure[0] = 'border-top-left-radius: ' + radiusLeft + 'px';
                break;
            case 'borderTopRightRadius': 
                box.style.borderTopRightRadius = radiusRight + 'px';
                cssStructure[1] ='border-top-right-radius:'+ radiusLeft+ 'px';
                break;
            case 'borderBottomLeftRadius': 
                box.style.borderBottomLeftRadius = radiusLeft + 'px';
                cssStructure[2] = 'border-bottom-left-radius:'+radiusRight+ 'px';
                break;
            case 'borderBottomRightRadius': 
                box.style.borderBottomRightRadius = radiusRight + 'px';   
                cssStructure[3] ='border-bottom-right-radius:'+ radiusRight+ 'px';
                break;
        } 
    }
    
}

function swipeEnd(e){
    started = false;
}

function getCss(){
    let cssCode = cssStructure.join('; \n');
    navigator.clipboard.writeText(cssCode);
}
