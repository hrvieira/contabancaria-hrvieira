import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

     private listaContas: Array<Conta> = new Array<Conta>();
     numero: number = 0;
     
     procurarPorTitular(titular: string): void {

         let listaContasPorTitula = this.listaContas.filter(
               c => c.titular.toUpperCase().includes(titular.toUpperCase())
         )

         for ( let conta of listaContasPorTitula) {
               conta.visualizar();

         }
     }

     procurarPorNumero(numero: number): void {

          let encontrada = this.buscarConta(numero);

          if(encontrada !== null){
               encontrada.visualizar();
          } else {
               console.log("\nConta não foi encontrada!");
          }
     }

     listarTodas(): void {

          for (let conta of this.listaContas){
               conta.visualizar();
          }
     }
     
     cadastrar(conta: Conta): void {

          this.listaContas.push(conta);
          console.log(`A conta ${this.numero} foi adicionada!`);
     }

     atualizar(conta: Conta): void {
          
          let encontrada = this.buscarConta(conta.numero);

          if(encontrada !== null){
               this.listaContas[this.listaContas.indexOf(encontrada)] = conta;
               console.log(`A conta número ${conta.numero} foi atualizada com êxito!`);
          } else {
               console.log("\nConta não foi encontrada!");
          }
     }
     
     deletar(numero: number): void {
          
          let encontrada = this.buscarConta(numero);

          if(encontrada !== null){
               this.listaContas.splice(this.listaContas.indexOf(encontrada), 1);
               console.log(`A conta número ${numero} foi excluída com êxito!`);
          } else {
               console.log("\nConta não foi encontrada!");
          }
     }
     
     sacar(numero: number, valor: number): void {
          
          let encontrada = this.buscarConta(numero);

          if(encontrada !== null){
               if(encontrada.sacar(valor) === true){
                    console.log(`O saque na Conta número ${numero} foi efetuado com êxito!`);
               }
          } else {
               console.log("\nConta não foi encontrada!");
          }
     }
     
     depositar(numero: number, valor: number): void {
          let encontrada = this.buscarConta(numero);

          if(encontrada !== null){
               encontrada.depositar(valor);
               console.log(`O depósito na Conta número ${numero} foi efetuado com êxito!`);
          } else {
               console.log("\nConta não foi encontrada!");
          }
     }
     
     transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
          
          let contaOrigem = this.buscarConta(numeroOrigem);
          let contaDestino = this.buscarConta(numeroDestino);

          if(contaOrigem !== null && contaDestino !== null){
               if(contaOrigem.sacar(valor) === true){
                    contaDestino.depositar(valor);
                    console.log(`Transferência de ${numeroOrigem} para ${numeroDestino} realizada com êxito!`)
               }
          } else {
               console.log("\nConta origem ou Conta destino não foi encontrada!");
          }


     }


     // Métodos auxiliares - separados

     public gerarNumero(): number {
          return ++ this.numero;
     }

     public buscarConta(numero: number): Conta | null {
          for (let conta of this.listaContas){
               if(conta.numero === numero){
                    return conta;
               }
          }

          return null;
     }
     
}