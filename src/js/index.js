const filhotes = ['chase', 'chase', 'marshall', 'marshall', 'rocky', 'rocky', 'zuma', 'zuma', 'skye', 'skye', 'rubble', 'rubble'];

let p, n, tmp;

for (p = filhotes.length; p;){
    n = Math.random() * p-- | 0;
    tmp = filhotes[n];
    filhotes[n] = filhotes[p];
    filhotes[p] = tmp;
}

const opcoes = document.querySelectorAll('.clicado');

let click = 0;
let imgTemp = [];
let idTemp = [-1,-1];
let timer = 0;
opcoes.forEach((opcao) => {    
    opcao.addEventListener('click', () => { 
        const idClicado = opcao.attributes.id.value;                
        if ((timer !== 0)) {
            clearTimeout(timer);
            idTemp[0].src = './src/img/hidden.jpg';
            idTemp[1].src = './src/img/hidden.jpg';
            timer = 0;
            click = 0;
        }
        idTemp[click] = document.getElementById(`${idClicado}`);
        imgTemp[click] = `./src/img/${filhotes[idClicado]}.jpg`
        idTemp[click].src = imgTemp[click];        
        if (idTemp[0].id === idTemp[1].id) return click =1;    
        
        
        if (click === 1) {
            if ((imgTemp[0] !== imgTemp[1]) && 
            (timer === 0)) { 
        
                timer = setTimeout(function(){  
                click = 0;                  
                idTemp[0].src = './src/img/hidden.jpg';
                idTemp[1].src = './src/img/hidden.jpg';
                timer = 0;                
        
                },2000);                                
            } else if (imgTemp[0] === imgTemp[1]) {
                click = 0;
                clearTimeout(timer);
                document.getElementById(idTemp[0].id).classList.add('revelado');
                document.getElementById(idTemp[0].id).classList.remove('clicado');
                document.getElementById(idTemp[1].id).classList.add('revelado');
                document.getElementById(idTemp[1].id).classList.remove('clicado');
                return;                
            }            
        }           
        
        if (click === 0) {click ++;}
        
    })
})

