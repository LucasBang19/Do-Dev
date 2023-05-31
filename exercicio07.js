let i = 0;
while (i < 5) {
  let numero = parseFloat(prompt("Digite um número: "));
  let j = 1;
  while (j <= 5) {
    let resultado = numero * (numero + j);
    console.log(`O resultado da multiplicação de ${numero} por ${numero + j} é: ${resultado}`);
    j++;
  }
  i++;
}
