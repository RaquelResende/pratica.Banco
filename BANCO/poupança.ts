class contaPoupanca extends conta{
    saldoPoupanca:number

    mostrarSaldoPoupanca(){
        console.log(`O saldo da poupança é ${cliente.nomecliente} é igual a R$${clientep.saldoPoupanca}`)
    }

}
var clientep= new contaPoupanca()
clientep.saldoPoupanca = 500

clientep.mostrarSaldoPoupanca()


