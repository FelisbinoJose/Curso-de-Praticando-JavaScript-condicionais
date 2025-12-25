//Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem 
// informando se o acesso foi ou não permitido.

import { createInterface } from 'readline';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite a idade: ', (idade) => {

    if (idade == 18) {
        console.log('Acesso permitido');
    } else {
        console.log('Acesso negado');
    }

    leitor.close();
});