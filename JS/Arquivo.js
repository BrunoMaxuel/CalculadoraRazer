function insert(num)
        {
            
            var numero = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('painelCalculadora').innerHTML = "";
        }
        function back()
        {
            var resultado = document.getElementById('painelCalculadora').innerHTML;
            document.getElementById('painelCalculadora').innerHTML = resultado.substring(0, resultado.length -1);
        }
        function calcular()
        {
            var resultado = document.getElementById('painelCalculadora').innerHTML;
            if(resultado)
            {
                document.getElementById('painelCalculadora').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('painelCalculadora').innerHTML = "Nada..."
            }
        }