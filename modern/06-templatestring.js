/* Não é possível utilizar quebra de linhas em aspas
simples nem em aspas duplas.*/
const naoPode = 'Não pode quebrar linha';

/* Se quisermos incluir variaveis em uma string com aspas
simples ou duplas precisamos utilizar o operador + para fazer
concatenação dos valores, o que pode ser um pouco verboso. */
console.log('Está é a utlização com aspas simples. ' + naoPode);
console.log("Está é a utlização com aspas duplas. " + naoPode);

const pode = 'E tudo que é adicionado dentro de "${}" é interpretado como JS.'
/* Podemos utilizar variaveis para fazer a interpolação de valores,
tornando o codigo mais consiso e simples. */
console.log(`Está é a utlização de template string
com ela podemos quebrar linhas. ${pode}`);
