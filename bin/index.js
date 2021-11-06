// initial config
let buttons = document.querySelectorAll('.number-button');
let inputContainer = document.querySelector('.input-container');
let buttonConvert = document.querySelector('.convert');

for(let i = 0; i< 7; i++){
    let input = document.querySelector('input').cloneNode(true);
    let inputDisplay = document.querySelector('.input-display').cloneNode(true);
    inputDisplay.setAttribute('id', i+1);
    input.setAttribute('id', i + 1);

    inputContainer.appendChild(input);
    inputContainer.appendChild(inputDisplay);
}

let inputs = document.querySelectorAll('input');
let displaiedInputs = document.querySelectorAll('.input-display');

//event listeners
buttons.forEach((item)=>{
    item.addEventListener('click', insert); 
});
buttonConvert.addEventListener('click', convert);


//insertion process (not the movie)
let key = 0;
let lastInputPut = inputs[key];
let lastDisplaiedInputPut = displaiedInputs[key];
let binaryArray =[];

function insertAction(e){
    let number = e.target.innerHTML; 
    lastInputPut.value = number;
    lastDisplaiedInputPut.innerHTML = number;

    binaryArray.push(lastInputPut.value); 

    key++;
    lastInputPut = inputs[key];
    lastDisplaiedInputPut = displaiedInputs[key];
}

function insert(e){
    if(key === 7){
        insertAction(e);
        
        buttons.forEach((item)=>{
        item.style.display = 'none';
        });
    } else { 
        insertAction(e);        
    }
}

function convert(){
    let binary = binaryArray.join("");
    let decimal = parseInt(binary, 2);

    inputContainer.innerHTML = decimal;
    inputContainer.style.fontSize = '120px';
    document.querySelector('.phrase').style.display = 'none';
}