let mapLength = {
    width: 100,
    height: 50
}

let map = document.querySelector('.map');

// generate the map
for(let i =0; i < mapLength.width; i++){
    let colum = document.createElement('div');
    map.appendChild(colum);

    for(let j =0; j < mapLength.height; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', i.toString() + "-" + j.toString() );

        colum.appendChild(square);
    }     
} 