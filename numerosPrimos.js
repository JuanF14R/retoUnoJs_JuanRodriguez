//FUNCION PARA ENCONTRAR NUMEROS PRIMOS MENORES A n Número ingresado

function numerosPrimos(n) {

    const primos = [];
  
    for (let i = 2; i < n; i++) {
      let esPrimo = true;
  
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }

      if (esPrimo) {
        primos.push(i);
      }
    }

    let arrayPrimos = "Números encontrados: " + primos.join(", ");
  
    return arrayPrimos;
  }

  
const number = parseInt(prompt("Ingrese un número y obtendra los primos menores que él"));


alert(`${numerosPrimos(number)}`) 
console.log("Los números primos encontrados son", numerosPrimos(number)) 