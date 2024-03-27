export class Conta {

     private _numero: number;
     private _agencia: number;
     private _tipo: number;
     private _titular: string;
     private _saldo: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, _saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = _saldo;

	}

    /**
     * Getter numero
     * @return {number}
     */
	public get_numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get_agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get_tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get_titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get_saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set_numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set_agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set_tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set_titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set_saldo(value: number) {
		this._saldo = value;
	}

	public sacar(valor: number): boolean {
		if(this._saldo >= valor){
			this.set_saldo(this._saldo - valor);
			return true;
		}

		console.log(`Saldo é insuficiente!`);
		return false;
	}

	public depositar(valor: number): void {
		this.set_saldo(this._saldo + valor);
	}
	

     public visualizar(): void {

		let tipo: string = "";

		switch(this._tipo) {
			case 1:
				tipo = "Conta Corrente";
				break;
			case 2:
				tipo = "Conta Poupança";
				break;
		}

          console.log("*************************************");
          console.log("Dados da Conta:");
          console.log("*************************************");
          console.log(`Numero da conta: ${this._numero}`);
          console.log(`Numero da agência: ${this._agencia}`);
          console.log(`Tipo da Conta: ${tipo}`);
          console.log(`Titular da Conta: ${this._titular}`);
          console.log(`Saldo da Conta: ${this._saldo}`);
          console.log("*************************************");

     }

}