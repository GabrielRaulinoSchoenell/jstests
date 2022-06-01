const phrase = document.querySelector('p');

const words = {
    pessoa: ["igor e a foto de coco", "mariana o anjo", "rauliiino", "lucas o narrador"],
    professor: ["enaldo o homem careca da inercia", "marcos aurelio o problematico", "ivandro robo", "leo o virgem", "antonio a marmota",
    "ana paula a gralha gorda", "jania a buceta fedida", "fabiana a estrela (pelo menos tem a mesma massa e tamanho)", "robson o negro",
    "Indiara a doida do lixo no chão", "Valeria a vagina peluda", "cleiton o professor", "Debora a filha dua vaca do caralho vaca arrombada desgraçada vadia filha duma puta do caralho da porra da puta que pariu", 
    "Carla a gralha", "Elenice a morta viva", "regina a geleia", "iris a velha fofoqueira", "Raquel, o anjo", "O cara de atualidades la o homem bomba",
    "leo fraiman"],
    tema: ["aids espacial", "penis de alienigena", "sexo selvagem com andoninhas marinhas", "seus seios", "negros com penis medio", "japao",
    "gorila lambendo saco de um medico", "vaginas com fungo", "vacas espaciais extraterrestres", "sua mae", "vomito de curupira", "saci perere",
    "bolsonaro", "o enem"],
    action: ["tira meleca do nariz", "lambe uma batata", "faz caretas", "beija o vento", "faz a prova do enem", "cria uma familia de judeus no porao",
    "faz sexo com um hipopotamo", "passa geleia na barriga"]
}


const substitution = ["pessoa", "professor", "tema", "action"];

function changeAll(){

    for(let i = 0; i < substitution.length; i++){
        let word = words[substitution[i]];
        let randomNumber = Math.floor(Math.random() * (word.length));

        let actualWordSubstitution = "<strong>"+word[randomNumber]+"</strong>";

        phrase.innerHTML = phrase.innerHTML.replace(substitution[i], actualWordSubstitution);
    }
}

changeAll();