function insert(num)
        {
            
            var numero = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('painelCalculadora').innerHTML = "";
        }
        function cleanChar()
        {
            var painel = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = painel.substring(0, painel.length -1);
        }
        function calcular()
        {
            var resultado = document.getElementById('painelCalculadora').innerHTML;
            if(painelCalculadora)
            {
                document.getElementById('painelCalculadora').innerHTML = eval(painelCalculadora);
            }
            else
            {
                document.getElementById('painelCalculadora').innerHTML = ""
            }
        }
