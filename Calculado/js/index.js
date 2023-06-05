var display = document.querySelector ('#display');
var numeros = "";


function press(numero){
    numeros += numero;  
    display.value = numeros; 
}

// .value sirve para mostrar el valor que estoy llamando, en este caso números. 

function setOP(operadores){
    numeros += operadores;  
    display.value = numeros; 
}

function calculate(){
    var resultado = eval(display.value);
    display.value = resultado; 
    numeros = resultado.toString(); 
}

function clr(){
    display.value = "";
    numeros = "";
}

