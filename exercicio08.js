var nome = prompt('Digite seu Nome');
var cpf = parseFloat(prompt(`Digite seu CPF`));
var valorAccount = 1000;

var banco = 1

while(banco <= 4) {
    var opcoes = prompt(`Olá ${nome} oque você deseja? Digite (1) para saque (2) para deposito ou (3) para consultar seu saldo`)
    
    if(opcoes = 1) {
        var saque = parseFloat(prompt(`Quanto você deseja sacar?`))
        var confirma = prompt(`Você tem certeza que deseja sacar R$${saque}? Apos isso você ficará com R$${valorAccount - saque}! Digite S para confirmar ou N para sair`)
    }
        if(confirma.toUpperCase() === "S") {
            var continuar = prompt(`Você realizou o saque com Sucesso, agora você tem R$${valorAccount - saque}`)
            var deseja = prompt(`Você deseja realizar alguma ação (2) Deposito (3) consultar sado (4) Sair da conta`)
        }
    else {
        var nao = prompt(`${nome} Você deseja realizar alguma ação (2) Deposito (3) consultar sado (4) Sair da conta`)
    }

    if(nao || opcoes === 2 ) {
        var deposito = parseFloat(prompt(`Quanto você deseja Depositar?`))
        var confirma2 = prompt(`Você tem certeza que deseja depositar R$${deposito}? Você ficará com R$${valorAccount + deposito} S ou N`)
    }
        if(confirma2.toUpperCase() === "S") {
            var continuar2 = prompt(`Você agora tem R$${valorAccount + deposito} na sua conta`)
        }
    else {
        var nao2 = prompt(`${nome} Você deseja realizar alguma ação (1) Saque (4) Sair da conta`)
    }
    
    if(nao || nao2 === 5 ) {
        var sair = prompt(`${nome} Você deseja sair da conta? S ou N`)
    }
        if(sair.toUpperCase() === "S") {
            break
        }
    else {
        banco++
    }
}