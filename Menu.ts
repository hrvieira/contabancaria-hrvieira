import readlinesync = require('readline-sync');
import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaPoupanca } from './src/model/ContaPoupança';
import { ContaController } from './src/controller/ContaController';
import { ContaCorrente } from './src/model/ContaCorrente';

export function main() {

    let opcao: number, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposConta = ['Conta Corrente', 'Conta Poupança'];

    let contas: ContaController = new ContaController();

    // teste
    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);


    while (true) {
        console.log(Colors.fg.black,Colors.bg.yellow);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                    VIEIRA BANK'S                    ");
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
                    // usando console.log para driblar os problemas de acentuação
                    console.log("Digite o número da agência:");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do Titular:");
                    titular = readlinesync.question("");

                    console.log("Qual o tipo da conta?");
                    tipo = readlinesync.keyInSelect(tiposConta, "", {cancel: false}) + 1;

                    console.log("Digite o saldo da conta (R$):");
                    saldo = readlinesync.questionFloat("");

                    switch(tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$):")
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                            );
                            
                            break;
                        case 2:
                            do {
                                console.log("Digite a data de redimento(entre 1 e 30):")
                                aniversario = readlinesync.questionInt("");
                            } while (aniversario < 1 || aniversario > 30);

                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));

                            break;
                    }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n");
                numero = readlinesync.questionInt("Digite o número conta:\n");
                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                keyPress();
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                keyPress();
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
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


function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
  
main();