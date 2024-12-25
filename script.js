let vis = document.getElementById("vis");

let num = [ 'X', 'X', 'X', 'X',];
vis.innerHTML = `${num[0]} - ${num[1]} - ${num[2]} - ${num[3]}`;

let i = 0;
let n = 0;

let senha = document.getElementById ("senha");

let resposta = document.getElementById("resposta");

let viso = 'cu';
function recebe () {
    num [i] = n;
    vis.innerHTML = `${num[0]} - ${num[1]} - ${num[2]} - ${num[3]}`;
    if (i <=3) {
        i++
        
    };
    
    
};


function um () {
    
    n = 1;
    recebe();
};

function dois() {
    
    n = 2;
    recebe();
}

function tres() {
    
    n = 3;
    recebe();
}

function quatro() {
    
    n = 4;
    recebe();
}

function cinco() {
    
    n = 5;
    recebe();
}

function seis() {
    
    n =6;
    recebe();
}

function sete() {
    
    n = 7;
    recebe();
}

function oito() {
    
    n = 8;
    recebe();
}

function nove() {
    
    n = 9;
    recebe();
}

function zero() {
    
    n = 0;
    recebe();
}

function apaga (){
    if (i > 0){
    i--;};
    num[i] = 'X';
    vis.innerHTML = `${num[0]} - ${num[1]} - ${num[2]} - ${num[3]}`;
    console.log(i);
    
    
    
}

function senhas(){
    senha = document.getElementById ("senha").value;
    
}
function compara (){
    viso = `${num[0]}` + `${num[1]}`+ `${num[2]}` + `${num[3]}`;
    senha = document.getElementById ("senha").value;
    
    
    if (senha === viso){
        
        resposta = document.getElementById("resposta").innerHTML = 'Acertou!'
        
    } else {
        
        resposta = document.getElementById("resposta").innerHTML = 'errou!'
        
    }
    console.log(viso);
    console.log(senha);
    
    
    
    
    
}
