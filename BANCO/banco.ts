module Banco {
class conta {
    nomecliente:string;
    saldo:number;
    ativo:boolean;

    mostrarSaldo(){
    console.log(`O saldo do cliente ${cliente.nomecliente} é ${cliente.saldo.toFixed(2)}`)
    }
}
var cliente = new conta();
cliente.nomecliente= "Ricardo";
cliente.saldo= 100000;
cliente.ativo=true;

cliente.mostrarSaldo()


 class contaPoupanca extends conta{
    saldoPoupanca:number

    mostrarSaldoPoupanca(){
        console.log(`O saldo da poupança é ${cliente.nomecliente} é igual a R$${clientep.saldoPoupanca}`)
    }

}
var clientep= new contaPoupanca()
clientep.saldoPoupanca = 500


clientep.mostrarSaldoPoupanca()



//class poupanca{


class saldo extends conta
  mostrarSaldo (){}
  }
  clientep.mostrarSaldoPoupanca()

}