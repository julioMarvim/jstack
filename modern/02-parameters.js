
/* Quando eu quero passar um valor padrão para um parametro, basta
incluir o valor apos o oparador = durante a declaração da função. */
function parametroPadrao(mensgem = 'Mensagem padrão'){
  console.log(mensgem);
}

parametroPadrao('Não é a mensagem padrão, portanto vai escrever isso aqui.');
/* Quando eu não passo nada, a mensagem padrão será mostrada. */
parametroPadrao();
