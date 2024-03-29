import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

     private listaContas: Array<Conta> = new Array<Conta>();
     numero: number = 0;
     
     procurarPorNumero(numero: number): void {
          let encontrada: boolean = false;
          for(let i:number = 0; i < this.listaContas.length; i++){
               
               if((this.listaContas[i].get_numero()) === numero){
                    
                    this.listaContas[i].visualizar();
                    encontrada = true;
                    break;
               }

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