document.querySelector('.busca').addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input != ''){
        clear()
        warning('carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){
            updateInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                icon: json.weather[0].icon,
                wind: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else{
            clear();
            warning('cidade não encontrada')
        }
    }
});

function clear(){
    warning('');
    document.querySelector('.resultado').style.display = 'none';
};

function updateInfo(json){
    warning('');
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.wind} <span>km/h</span>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
}

function warning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}