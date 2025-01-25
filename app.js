let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoAlElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoAlElemento(`p`, `¡Felicidades Acertaste! el numero secreto es: ${numeroSecreto}, y lo lograste en: ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoAlElemento(`p`, `¡El numero secreto es menor!`);
        }else{
            asignarTextoAlElemento(`p`, `¡El numero sereto es mayor!`);
        };
        intentos++;
        limpiarCaja();
    };
    return;
};

function limpiarCaja(){
    let valorCaja = document.querySelector(`#valorUsuario`).value = ``;
}

function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoAlElemento(`p`, `Ya se han sorteado todos los numeros posibles`)
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
};

function condicionesIniciales(){
    asignarTextoAlElemento(`h1`, `Bienvenido al Juego del Numero Secreto`);
    asignarTextoAlElemento(`p`, `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`el numero secreto es ${numeroSecreto}`);    
};

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //iniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton ´nuevo juego´
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

condicionesIniciales();
