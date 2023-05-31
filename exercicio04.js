var numeros = [];

// Receber os 5 números de entrada
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt(`Digite o ${i}º número:`));
  numeros.push(numero);
}

// Calcular a multiplicação pelos próximos 5 números em sequência
for (var i = 0; i < 5; i++) {
  var resultado = numeros[i];

  console.log(`Número: ${numeros[i]}`);
  for (var j = 1; j <= 5; j++) {
    resultado *= (numeros[i] + j);
    console.log(`${numeros[i]} x ${numeros[i] + j} = ${resultado}`);
  }

  console.log();
}
