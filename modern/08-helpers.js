/* <==> <==> <==> <==> includes <==> <==> <==> <==> */

/* Verifica se um valor está incluido em uma string ou
em array. */

const tech = 'Node.js';
const array = [ 'Node.js', 'React', 'TypeScript'];

/* Neste caso irá varrer a minha string e verificar se
o caractere ou os caracteres informados estão contidos
se estiverem, retornará um valor booleano. */
const includeStringTrue = tech.includes('.js');
const includeStringFalse = tech.includes('odejs');

console.log('[Includes True]', includeStringTrue);
console.log('[Includes False]', includeStringFalse);

/* No caso de array ele não varre o valor dos itens mas
sim, percorrer a lista e pesquisar se o valor informado
é encontrado neste array. */

const includesArrayTrue = array.includes('Node.js');
const includesArrayFalse = array.includes('.js');

console.log('[Includes True]', includeStringTrue);
console.log('[Includes False]', includeStringFalse);


/* <==> <==> <==> <==> startsWith <==> <==> <==> <==> */

/* Verifica se uma string começa com o valor passado por
parametro. */

const startsWithTrue = tech.startsWith('No');
const startsWithFalse = tech.startsWith('B');
console.log('[Starts With True]', startsWithTrue);
console.log('[Starts With False]', startsWithFalse);

/* <==> <==> <==> <==> startsWith <==> <==> <==> <==> */

/* Verifica se uma string termina com o valor passado por
parametro. */

const endsWithTrue = tech.endsWith('.js');
const endsWithFalse = tech.endsWith('.mjs');
console.log('[Ends With True]', startsWithTrue);
console.log('[Ends With False]', startsWithFalse);
