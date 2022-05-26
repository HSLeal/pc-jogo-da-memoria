const filhotes = ['chase', 'chase', 'marshall', 'marshall', 'rocky', 'rocky', 'zuma', 'zuma', 'skye', 'skye', 'rubble', 'rubble'];

let p, n, tmp;

for (p = filhotes.length; p;){
    n = Math.random() * p-- | 0;
    tmp = filhotes[n];
    filhotes[n] = filhotes[p];
    filhotes[p] = tmp;
}

console.log(filhotes);