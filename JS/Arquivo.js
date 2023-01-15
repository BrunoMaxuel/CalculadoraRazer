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
        resultToFixed = resultado.toFixed(2);
        arrayResultado = resultToFixed.split('.');
        if(arrayResultado[1] == '00'){
            document.querySelector('#painelCalculadora').innerHTML = resultado;
        }else{
            document.querySelector('#painelCalculadora').innerHTML = resultado.toFixed(2);
        }
    }else{
        document.getElementById('painelCalculadora').innerHTML = ""
    }
}
function calcularPorcent(){
    var resultado = document.getElementById('painelCalculadora').innerHTML;
    //aqui vai calcular o resultado valor - porcentagem
    if(resultado){
        for (let index = 0; index < resultado.length; index++) {
            if(resultado[index] == '+'){
                resultado = resultado.split('+');
                numero1 = parseFloat(resultado[0]);
                numero2 = parseFloat(resultado[1]);
                resultado = numero1 * (numero2 /100) + numero1;
            }
            if(resultado[index] == '-'){
                resultado = resultado.split('-');
                numero1 = parseFloat(resultado[0]);
                numero2 = parseFloat(resultado[1]);
                resultado = numero1 - (numero1 * (numero2 / 100));
            }
        }
        resultado = resultado.toFixed(2);
        resultado = resultado.toString();
        resultadoFloat = parseFloat(resultado);
        resultadoSplit = resultado.split('.');
        if(resultadoSplit[1] == '00'){
            document.getElementById('painelCalculadora').innerHTML = resultadoFloat.toFixed(0);
        }else{
            document.getElementById('painelCalculadora').innerHTML = resultadoFloat.toFixed(2);
        }
    }
}   


//pop remove o final
//shift remove o primeiro do array
//push adiciona no final do array igual o append