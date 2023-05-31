for (let i = 1; i < 2; i++) {

    var nome = prompt("Digite seu nome")
    var idade = parseInt(prompt(`Digite sua idade`))
    var altura = parseFloat(prompt(`Digite a sua altura`))
    var peso = parseFloat(prompt(`Digite seu peso`))
    var profissao = prompt(`Digite sua profissão`)
    
    
    console.log(`Usuário inseriu  \n Nome:${nome} \n idade: ${idade}\n Peso: ${peso} \n Profissão: ${profissao} `)
    
    console.log(`Olá ${nome}, você tem ${idade} anos e é ${profissao}, tem ${altura}M de altura e pesa ${peso}KG! `)
    
    var imc = peso / (altura * altura)
    console.log(`Seu IMC é de ${imc}kg/m2`)

    if(imc <= 18.5) {
        console.log(`Você está muito magro`)
    }
    else if(imc >= 18.5 && imc <= 24.9) {
            console.log(`Você está normal`)
        }
    else {
        console.log('você está completamente obeso')
    }
    }