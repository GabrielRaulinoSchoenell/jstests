let nameList = document.querySelector('.name-list');

for(let i in data){
    let name = data[i].first_name;
    let div = document.createElement('div');
    div.setAttribute('id', i);
    div.innerHTML = name;

    nameList.appendChild(div);
    div.addEventListener('click', displayInfo);
}
let information = document.querySelectorAll('.info');
let jsonOrder = ['id', 'first_name', 'last_name', 'email', 'country', 'modified', 'vip'];

function displayInfo(e){
    let person = data[e.target.id];

    for(let i in information){
        information[i].innerHTML = `${jsonOrder[i]}: ${person[jsonOrder[i]]}`;
    };

    let lastActivated = document.querySelector('.clicked');
    (lastActivated) ? lastActivated.classList.remove('clicked') : false;

    document.querySelector('.name').innerHTML = person.first_name + ' '+ person.last_name;

    e.target.classList.add('clicked');
}