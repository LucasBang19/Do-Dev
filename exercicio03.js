var qtdHomens = 0;
var mulherAcimaSete = 0;
var maiorNotaHomem = 0;
var somaNota = 0;

for (var i= 1; i <=10; i++) {
    var nota = parseFloat(prompt(`Digite a nota do ${i}° Aluno de (0 A 10)`))
    var sexo = prompt(`Digite o sexo do ${i}° Aluno com (M ou F)`)

    somaNota += nota

    if (sexo.toUpperCase() === "M") {
    qtdHomens++
    }
        if(nota > maiorNotaHomem) {
            maiorNotaHomem = nota
        }
    else if(sexo.toLocaleUpperCase() === "F" && nota > 7) {
        mulherAcimaSete++
    }
}

var media = somaNota / 10

console.log(`A quantidade de homens é de ${qtdHomens}`)
console.log(`A maior nota de homem foi ${maiorNotaHomem}`)
console.log(`A quantidade de mulher acima de sete é de ${mulherAcimaSete}`)
console.log(`A media da turma é de ${media}`)