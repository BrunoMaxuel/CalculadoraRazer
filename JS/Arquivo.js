contador = 0;
contadorExecution = 1;
function insert(num){
    if(num == '-' || num == '+' || num == '/'|| num == '*' || num =='.'){
        contador += 1;
    }else{
        contador = 0;
    }
    if(contador < 2 && contadorExecution < 13){
        document.getElementById('painelCalculadora').innerHTML += num;
        contadorExecution += 1;
        if(num == '00'){
            contadorExecution += 1;
        }
    }
}
function clean(){
    document.getElementById('painelCalculadora').innerHTML = '';
    contadorExecution = 1;
}
function apagarCaractere(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    document.getElementById('painelCalculadora').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    if(resultado){
        document.getElementById('painelCalculadora').innerHTML = eval(resultado);
    }else{
        document.getElementById('painelCalculadora').innerHTML = ""
    }
}
function calcularPorcent(){
    var porcent = document.getElementById('painelCalculadora').innerHTML;
    if(porcent){
    document.getElementById('painelCalculadora').innerHTML = eval(porcent);
    }else{
        document.getElementById('painelCalculadora').innerHTML = '';
    }
}
