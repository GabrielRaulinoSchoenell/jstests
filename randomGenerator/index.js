const themeDisplay = document.querySelector('.theme-display');
const button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    generateRandomTheme();
    setThemeDisplay()
});

let generated = false;      //indentifies if the theme's been selected

function generateNumber(data)
{
    let randomTheme = Math.floor(Math.random() * data.length);
    return randomTheme;
}

function generateRandomTheme()
{
        themeDisplay.children[0].innerHTML = items[generateNumber(items)];
        themeDisplay.children[1].innerHTML = preposition[generateNumber(preposition)];
        themeDisplay.children[2].innerHTML = items[generateNumber(items)]; 

        generated = true;
};

function setThemeDisplay()
{
    themeDisplay.setAttribute('style', 'background-color: #090');

}
function stopAction(el){
    el.setAttribute('style', 'background-color: #444; text-decoration: line-through');
}

// lista
const etapas = document.querySelectorAll('.etapa');
const square = document.querySelector('.data');



etapas.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.getAttribute('placed') <= 2 && generated){

            let placedAtr = element.getAttribute('placed');

            element.setAttribute('placed', parseInt(placedAtr) +1);

            console.log(element.getAttribute('placed'));

                if(element.getAttribute('placed') == 3){
                    stopAction(element);
                }

            let themeDesign = document.createElement('li');
            let themeData = themeDisplay.children;
            themeDesign.innerHTML = `<li class='data-content'>${themeData[0].innerHTML} ${themeData[1].innerHTML} ${themeData[2].innerHTML}</li>`;

            let list = square.children[element.id].querySelector('ul');
            list.appendChild(themeDesign);

            generated = false;
        } 
    });

});

document.querySelector('.etapaEspecial').addEventListener('click', e =>{
    let element = e.target;
    if(!element.getAttribute('placed') == 0 && generated){
        element.setAttribute('placed', true);
        element.setAttribute('style', 'background-color: #444; text-decoration: line-through');

        let themeDesign = document.createElement('div');
        themeDesign.innerHTML = `<div class='data-content'>é livre, seu macaco, porque gerou o tema?</div>`;

        console.log(square.children[2].querySelector('ul'));

        let list = square.children[2].querySelector('ul'); 

        list.appendChild(themeDesign);
    }
});