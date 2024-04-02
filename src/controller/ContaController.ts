import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

     private listaContas: Array<Conta> = new Array<Conta>();
     numero: number = 0;
     
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
          throw new Error("Method not implemented.");
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
          throw new Error("Method not implemented.");
     }
     
     depositar(numero: number, valor: number): void {
          throw new Error("Method not implemented.");
     }
     
     transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
          throw new Error("Method not implemented.");
     }


     // Métodos auxiliares - separados

     public gerarNumero(): number {
          return ++ this.numero;
     }

     public buscarConta(numero: number): Conta | null {
          for (let conta of this.listaContas){
               if(conta.get_numero() === numero){
                    return conta;
               }
          }

          return null;
     }
     
}