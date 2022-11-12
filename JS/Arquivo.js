function insert(num)
        {
            
            var numero = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('painelCalculadora').innerHTML = "";
        }
        function backSpace()
        {
            var painel = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = painel.substring(0, painel.length -1);
        }
        function calcular()
        {
            var result = document.getElementById('painelCalculadora').innerHTML;
            if(result)
            {
                document.getElementById('painelCalculadora').innerHTML = eval(result);
            }
            else
            {
                document.getElementById('painelCalculadora').innerHTML = 'nada';
            }
        }
