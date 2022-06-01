(() => {
    let startBtn = document.querySelector('.micbutton');
    let mic = document.querySelector('.mic-case');
    let output = document.querySelector('.text');
    
    function start() {
        mic.style.backgroundColor='#282';
        mic.style.border ='1px solid #4a4';

        let recognition = new webkitSpeechRecognition();

        recognition.interimResults = true;
        recognition.lang = "pt_BR";
        recognition.continuous = true;
        recognition.start();
      
        recognition.onresult = function(event) {
            for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                let content = event.results[i][0].transcript.trim();
                let data = content.split(' ');
                let dataFilter = [];

                data.map((item)=>{
                    if(item.toLowerCase() === 'enem'){
                        dataFilter.push({item, date: new Date()});
                    }
                })

                let contentDiv = document.createElement('div');
                contentDiv.innerHTML = content

                output.appendChild(contentDiv);
              }
            }
        };
    };
    startBtn.addEventListener('click', () => start());
  })();