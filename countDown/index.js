let button = document.querySelector('.define');
let minutes;
let seconds;

let minutesDisplay = document.querySelectorAll('.number')[0];
let secondsDisplay = document.querySelectorAll('.number')[2];

let starter;

button.addEventListener('click', define);

function define(){
    (starter) ? clearInterval(starter) : false;

    minutes = parseInt(document.querySelectorAll('input')[0].value);
    seconds = parseInt(document.querySelectorAll('input')[1]. value);

    (minutes > 9) ? minutesDisplay.innerHTML = minutes : minutesDisplay.innerHTML = '0' + minutes;
    (seconds > 9) ? secondsDisplay.innerHTML = seconds : secondsDisplay.innerHTML = '0' + seconds;

    starter = setInterval(timer, 1000);
}

function timer(){
    if(seconds > 1){
        seconds --;
    } else if(seconds === 1  && minutes > 0){
        minutes--;
        seconds = 59;
    }

    (minutes > 9) ? minutesDisplay.innerHTML = minutes : minutesDisplay.innerHTML = '0' + minutes;
    (seconds > 9) ? secondsDisplay.innerHTML = seconds : secondsDisplay.innerHTML = '0' + seconds;
}