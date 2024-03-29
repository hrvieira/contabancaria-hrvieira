import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

     private listaContas: Array<Conta> = new Array<Conta>();
     numero: number = 0;
     
     procurarPorNumero(numero: number): void {
          let contador: number = 0;
          let encontrada: boolean = false;
          
          while(!encontrada && contador < this.listaContas.length) {
               if((this.listaContas[contador].get_numero()) === numero){
                    console.log(`\nA conta numero ${numero} foi encontrada!\n`);
                    this.listaContas[contador].visualizar();
                    encontrada = true;
               }
               contador++   
          }

          if (!encontrada) {
               console.log(`A conta número ${numero} não foi encontrada em nosso Banco.`);
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

     gerarNumero(): number {
          return ++ this.numero;
     }

     atualizar(conta: Conta): void {
          throw new Error("Method not implemented.");
     }
     
     deletar(numero: number): void {
          throw new Error("Method not implemented.");
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
     
}