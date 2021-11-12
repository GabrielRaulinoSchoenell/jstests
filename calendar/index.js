let weekDay = document.querySelector('.day');
let calendarTitle = document.querySelector('.calendar-title');
let calendarDays = document.querySelector('.calendar-days');
let calendarContent = document.querySelector('.calendar-content');
let modal = document.querySelector('.modal');
let modalDay = document.querySelector('.modal-content-day');

document.addEventListener('keypress', (e)=>{
    if(e.key === ';') 
    (document.body.getAttribute('theme') === 'dark')? document.body.setAttribute('theme', 'none') : document.body.setAttribute('theme', 'dark')
    // only to joke, this dark theme is really bad
})


let date = (year,month,day)=>new Date(year,month,day);
let dateWeek = (year,month)=>new Date(year,month);
let initialDay = dateWeek(new Date().getFullYear(),new Date().getMonth()).getDay();
let daysInMonth = date(new Date().getFullYear(), new Date().getMonth() -1, 0).getDate();



let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

calendarTitle.innerHTML = 'calendar ' + months[new Date().getMonth()] + ' - ' + new Date().getFullYear();


for(let i=0; i<6; i++){
    let clone = weekDay.cloneNode(true);
    clone.innerHTML = week[i+1];
    calendarDays.appendChild(clone);
}

for(let i=0; i<42; i++){
    let calendarDayBlock = document.createElement('div');
    calendarDayBlock.classList.add('calendar-content-day');
    let starter = 0;
    let unactiveDay ='active';
    if(initialDay <= i && i < daysInMonth +1) {
        starter = i;
        calendarDayBlock.addEventListener('click', createEvent);
    } else{
        starter = Math.abs(i - daysInMonth);
        unactiveDay = 'unactive';
    };
    

    calendarDayBlock.innerHTML = '<div class="day-number">'+starter+'</div> <div class="day-content"></div>';
    calendarDayBlock.classList.add(unactiveDay);
    
    calendarDayBlock.childNodes[2].setAttribute('id', i);
    
    calendarContent.appendChild(calendarDayBlock);

    
}

let contentBox;
function createEvent(e){
    let day = e.target;
    contentBox = day.childNodes[2]; 

    modalDay.innerHTML =`${months[new Date().getMonth()]} ${day.childNodes[0].innerHTML}, ${new Date().getFullYear()}`;
    modal.style.display = 'flex';
}
document.querySelector('.exit').addEventListener('click', ()=>{
    modal.style.display = 'none';
});

document.querySelector('.save').addEventListener('click',(e)=>{
    let text = document.querySelector('input').value;

    contentBox.innerHTML = text;
    modal.style.display = 'none';
});
