let container = document.querySelector('.container');
let values = [25,10,5,1];
let backgrounds = ['#09c', '#aa0', '#888', '#660'];

let input = document.querySelector('input');

for(let i = 0; i<4; i++){
    let coinInfo = document.createElement('div');
    let coin = document.createElement('div');
    let coinAmount = document.createElement('div');

    coinInfo.classList.add('coin-info');
    coin.classList.add('coin');
    coinAmount.classList.add('coin-amount')

    coin.innerHTML = values[i];
    coin.style.backgroundColor = backgrounds[i];
    coinAmount.innerHTML = 0;

    coinInfo.appendChild(coin);
    coinInfo.appendChild(coinAmount);

    container.appendChild(coinInfo);
}   

document.querySelector('.button').addEventListener('click', convert);



let coinBox = document.querySelectorAll('.coin-amount');
let coin = document.querySelectorAll('.coin');

function convert(){
    let dolars = input.value * 100;

    for(let i =0; i<4; i++){
        if (dolars >0) {
            let coinValue = Math.floor(dolars / (values[i]));

            dolars = dolars - (values[i]) * coinValue;
            coinBox[i].innerHTML = coinValue;

            coin[i].style.width = coinValue * 10 + 50 + 'px';
            coin[i].style.height = coinValue * 10 + 50 + 'px';

        }

    }
}