//Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. 
// Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

//Crie um programa que, dado o dia da semana em formato numérico:

//0: Domingo
//1: Segunda - feira
//2: Terça - feira
//3: Quarta - feira
//4: Quinta - feira
//5: Sexta - feira
//6: Sábado

//Verifique se a loja está aberta e qual o horário de funcionamento.

//Se for sábado(6) ou domingo(0), a loja estará aberta em horário especial.
//Nos outros dias, a loja estará aberta no horário normal.

import { createInterface } from 'readline';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const diaDaSemana = 'loja abre das 9h ás 18h';

const finalDeSemana = 'Loja abre das 10h ás 14h'

leitor.question('Digite o dia da semana: ', (entrada) => {

    const dia = Number(entrada);

    switch (dia) {
        case 0:
            console.log(`Domingo: ${finalDeSemana}`);
            break;
        case 1:
            console.log(`Segunda - feira: ${diaDaSemana}`);
            break;
        case 2:
            console.log(`Terça - feira: ${diaDaSemana}`);
            break;
        case 3:
            console.log(`Quarta - feira: ${diaDaSemana}`);
            break;
        case 4:
            console.log(`Quinta - feira: ${diaDaSemana}`);
            break;
        case 5:
            console.log(`Sexta - feira: ${diaDaSemana}`);
            break;
        case 6:
            console.log(`Sábado: ${finalDeSemana}`);
            break;
        default:
            console.log(`Opção Inválida`);
            break;
    }

    leitor.close();
});