let arrows = document.querySelectorAll('.arrow');

let firstPositionX;

arrows.forEach((element, key)=>{

    element.addEventListener('dragstart', (e)=>{
        // e.preventDefault();   
        firstPositionX = e.clientX; 
    })

    element.addEventListener('drag', (e)=>{
        let positionX = e.clientX;

        let rotation = firstPositionX - positionX;       

        let image = e.target.parentNode.children[1];
        image.setAttribute('style', `transform: rotate(${-rotation}deg)`);
    })

    element.addEventListener('dragend', (e)=>{
        let positionX = e.clientX;


        let rotation = firstPositionX - positionX;


        let image = e.target.parentNode.children[1];
        image.setAttribute('style', `transform: rotate(${-rotation}deg)`);

    })

    
})


function displayImages(){
    let inputs = document.querySelectorAll('.inputs');
    inputs.forEach((element, key)=>{
        let file = element.files[0];


        if(file.type == 'image/png' || file.type == 'image/jpeg'){
            
            let newImage = URL.createObjectURL(file);

            let id = key + 1;
            let displayImage = document.querySelector('.im' + id);

            displayImage.src = newImage;
        } else{
            document.body.innerHTML = 'vai toma no seu cu';
        }

        

    })





    // let file = document.querySelector('#image1');
    // let image = file.files[0];

    // let imageObject = document.createElement('img');
    // imageObject.src = URL.createObjectURL(image);




    // let thing = document.querySelector('.im1');
    // thing.src = imageObject.src;

}