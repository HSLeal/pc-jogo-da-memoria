const filhotes = ['chase', 'chase', 'marshall', 'marshall', 'rocky', 'rocky', 'zuma', 'zuma', 'skye', 'skye', 'rubble', 'rubble'];

let p, n, tmp;

for (p = filhotes.length; p;){
    n = Math.random() * p-- | 0;
    tmp = filhotes[n];
    filhotes[n] = filhotes[p];
    filhotes[p] = tmp;
}
console.log(filhotes);

const opcoes = document.querySelectorAll('.clicado');
console.log(opcoes);
let click = 0;
let imgTemp = [];
let idTemp = [];
let timer;
opcoes.forEach((opcao) => {
    opcao.addEventListener('click', () => { 
         
        console.log(click);      
        if ((click === 2) && (imgTemp[0] !== imgTemp[1])){
            idTemp[0].src = './src/img/hidden.jpg';
            idTemp[1].src = './src/img/hidden.jpg'; 
            clearTimeout(timer);
            click = 0;
        }
        const idClicado = opcao.attributes.id.value;
        // const revelar = document.getElementById(`${idClicado}`);
        idTemp[click] = document.getElementById(`${idClicado}`);
        imgTemp[click] = `./src/img/${filhotes[idClicado]}.jpg`
        idTemp[click].src = imgTemp[click];
        
        if (click === 1) {            
            if (imgTemp[0] !== imgTemp[1]) { 
                timer = setTimeout(function(){
                idTemp[0].src = './src/img/hidden.jpg';
                idTemp[1].src = './src/img/hidden.jpg';
                click = 0;
                console.log('chegamos aqui');                
                },2000);                
            } else {
                click = -1;
            }            
        }         
        click ++;
        // console.log(idClicado);
        

    })
})

