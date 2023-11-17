     var numeros = [];

    function generarNumero() {
      var numeroGenerado = Math.floor(Math.random() * 100) + 1;
      document.getElementById("numero").value = numeroGenerado;
    }

    function agregarNumero() {
      var numero = document.getElementById("numero").value;

      if (numero !== "") {
        var tabla = document.getElementById("tabla");
        var fila = tabla.insertRow(-1);
        var celda = fila.insertCell(0);
        celda.innerHTML = numero;

        numeros.push(parseInt(numero)); // Agregar el número a la lista
      }
    }

    function calcularPromedio() {
      var promedioDiv = document.getElementById("promedioDiv");

      if (numeros.length > 0) {
        var suma = numeros.reduce(function (a, b) {
          return a + b;
        });

        var promedio = suma / numeros.length;
        promedioDiv.innerHTML = "<p>Promedio: " + promedio.toFixed(2) + "</p>";
      } else {
        promedioDiv.innerHTML = "<p>No hay números en la tabla.</p>";
      }
    }
