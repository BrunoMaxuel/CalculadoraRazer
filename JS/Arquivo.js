contador = 0;
function insert(num){
    let painel = document.getElementById('painelCalculadora').innerHTML;
    if(num == '-' || num == '+' || num == '/'|| num == '*' || num =='.'){
        contador += 1;
    }else{
        contador = 0;
    }
    if(contador < 2 && painel.length < 13 || painel == null){
        document.getElementById('painelCalculadora').innerHTML += num;
        if(num == '00'){
        }
    }
}
function clean(){
    document.getElementById('painelCalculadora').innerHTML = '';
}
function apagarCaractere(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    document.getElementById('painelCalculadora').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    if(resultado){
        var resultado = eval(resultado);
        arrayResultado = resultado.split('.');
        if(arrayResultado[1] != "00"){
            document.getElementById('painelCalculadora').innerHTML = parseFloat(resultado.toFixed(2));
        }else{
            document.getElementById('painelCalculadora').innerHTML = resultado;
        }
    }else{
        document.getElementById('painelCalculadora').innerHTML = ""
    }
}
function calcularPorcent(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    //aqui vai calcular o resultado valor - porcentagem
    for (let index = 0; index < resultado.length; index++) {
        
        if(resultado[index] == '+'){
            resultado = resultado.split('+');
            numero1 = parseFloat(resultado[0]);
            numero2 = parseFloat(resultado[1]);
            porcent = numero1 * (numero2 /100) + numero1;
        }
        if(resultado[index] == '-'){
            resultado = resultado.split('-');
            numero1 = parseFloat(resultado[0]);
            numero2 = parseFloat(resultado[1]);
            porcent = numero1 - (numero1 * (numero2 / 100));
        }
        
    }
    
    document.getElementById('painelCalculadora').innerHTML = porcent.toFixed(2);
}   
