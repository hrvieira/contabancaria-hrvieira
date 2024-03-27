import readlinesync = require('readline-sync');
import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaPoupanca } from './src/model/ContaPoupança';

export function main() {
    let opcao: number;

    // let c1: Conta = new Conta(1, 123, 1, "Henrique", 1000000);
    // c1.visualizar();

    // // modificando o saldo
    // c1.set_saldo(15000000);
    // // pegando o novo saldo
    // console.log(c1.get_saldo());

    // c1.depositar(500000);
    // c1.visualizar();

    // const cc1: Conta = new Conta(2, 456, 1, "Henrique Vieira", 1000);
    // cc1.visualizar();
    // cc1.sacar(10500);
    // cc1.visualizar();
    // cc1.depositar(5000);
    // cc1.visualizar();

    const cp1: Conta = new ContaPoupanca(1, 321, 2, "Henrique", 1500000, "19/04/1993");
    cp1.visualizar();

    while (true) {
        console.log(Colors.fg.black,Colors.bg.yellow);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        Colors.reset);
  
        console.log(Colors.bg.white,Colors.fg.black,"Entre com a opção desejada: ",Colors.reset);
        opcao = readlinesync.questionInt("");
  
        if (opcao == 9) {
            console.log(Colors.bg.black,Colors.fg.green,"\nBanco hrvieira - Hoje, maior que ontem!",Colors.reset);
            sobre();
            process.exit(0);
        }
  
        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                break;
            case 6:
                console.log("\n\nSaque\n\n");
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }
  
}
  
/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
     console.log(Colors.fg.black,Colors.bg.white)
     console.log("\n*****************************************************");
     console.log("Projeto Desenvolvido por: Henrique Vieira");
     console.log("Generation Brasil - generation@generation.org");
     console.log("github.com/hrvieira");
     console.log("*****************************************************\n");
     console.log(Colors.reset)
}
  
main();