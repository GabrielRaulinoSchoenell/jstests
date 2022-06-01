let origin = document.querySelector('.origin');
let result = document.querySelector('.result');

let converter = document.querySelector('.convert');
let reset = document.querySelector('.reset');

converter.addEventListener('click', ()=>{
    let text = origin.value;

    let regex = new RegExp(
        (/[A-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ]{1,}/), 'g'
    );

    let valid = text.match(regex);

        // console.log(valid);

    valid.forEach(element => {
        element.toString();
    });
    console.log(valid);


    // let text = origin.value;

    // let regex = new RegExp(
    //     (/([A-z(\,)?]{1,})/), 'g'
    // );


    // let valid = text.match(regex);

    // let titles = valid[0].split(',');

    // let fullText = [];

    // for(let i=1; i<valid.length;i++){
    //     let body = valid[i].split(',');
    //     let object = {};

    //     for(let j=0; j<titles.length;j++){
    //         object[titles[j]] = body[j];
    //     }
    //     fullText.push(object);
    // }
    
    // result.innerHTML = JSON.stringify(fullText);
});








/*
nome,idade,cidade,animal
carlos,sessenta,palhoca,leao
moises,oitenta,saopaulo,girafa
marcos,noventa,riodejaneiro,macaco

test like this, you can't insert numbers and special chars such as "space"
        

*/