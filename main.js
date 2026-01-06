const statusPagamento = 'aprovado';

switch (statusPagamento.toLowerCase()) {
    case 'pendente':
        console.log('Pagamento pendente');
        break;
    case 'aprovado':
        console.log('Pagamento aprovado');
        break;
    case 'recusado':
        console.log('Pagamento recusado');
        break;
    default:
        console.log('Opção invalída');
        break;
}

