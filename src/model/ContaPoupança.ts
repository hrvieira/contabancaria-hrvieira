import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

     private _aniversario: string;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: string) {
          super(numero, agencia, tipo, titular, saldo);
		this._aniversario = aniversario;
	}

    /**
     * Getter aniversario
     * @return {number}
     */
	public get_aniversario(): string {
		return this._aniversario;
	}

    /**
     * Setter aniversario
     * @param {number} value
     */
	public set_aniversario(value: string) {
		this._aniversario = value;
	}

     public visualizar(): void {
          super.visualizar();
          console.log(`Data de aniversário: ${this._aniversario}`);
      }


}