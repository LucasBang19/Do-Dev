var qtdHomens = 0;
var mulherAcimaSete = 0;
var maiorNotaHomem = 0;
var somaNota = 0;

var i = 1
while(i <= 10) {
    var nota = parseFloat(prompt(`Digite a nota do ${i}° Aluno de (0 a 10); `))
    var sexo = prompt(`Digite o sexo do ${i}° Aluno com (M ou F): `)
    i++

    somaNota += nota

    if(sexo.toUpperCase() === "M") {
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
console.log(`A media da turma é de ${media}! `)
console.log(`A maior nota de homem é ${maiorNotaHomem} `)
console.log(`A quantidade de mulher acima de Sete foi de ${mulherAcimaSete}! `)
