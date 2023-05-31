for (let i = 1; i < 2; i++) {

var nome = prompt("Digite seu nome")
var idade = parseInt(prompt(`Digite sua idade`))
var altura = parseFloat(prompt(`Digite a sua altura`))
var peso = parseFloat(prompt(`Digite seu peso`))
var profissao = prompt(`Digite sua profissão`)


console.log(`Usuário inseriu  \n Nome:${nome} \n idade: ${idade}\n Peso: ${peso} \n Profissão: ${profissao} `)

console.log(`Olá ${nome}, você tem ${idade} anos e é ${profissao}, tem ${altura}M de altura e pesa ${peso}KG! `)



    if(idade >= 18) {
        console.log(`${nome} está libertado para tomar um whisky`)

    }
    else {
        console.log(`${nome} não pode beber`)
    }
}