const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

/* <==> <==> <==> <==> <==>  HOF  <==> <==> <==> <==> <==>
Higher Order Functions. As HOF são definidas como funções
que aceitam funções como parâmetro e/ou retorna um função
como saída.
*/

/* <==> <==> <==> <==> <==>.find()<==> <==> <==> <==> <==>

Percorre o array e quando ele encontrar um valor que seja
verdadeiro mediante determinada condição impelementada na
sua função de callback, então ele irá retornar este ítem.
*/

const find = array.find((product) => {
  /* irá dar false para os dois primeiros itens da lista,
  e irá retornar o terceiro item. Se a expressão encontra
  mais de um item como verdadeiro, o primeiro é retornado
  e a execução é encerrada. */
  return product.name === 'Magic Mouse';
});

console.log({ find });

/* <==> <==> <==> <==>  .findIndex()  <==> <==> <==> <==>

Percorre o array e quando ele encontrar um valor que seja
verdadeiro mediante determinada condição impelementada na
sua função de callback, então ele irá retornar o index do
item encontado, ou seja a posição do item no array.*/

const findIndex = array.findIndex((product) => {
  /* irá dar false para os dois primeiros itens da lista,
  e irá retornar o terceiro item. Se a expressão encontra
  mais de um item como verdadeiro, o primeiro é retornado
  e a execução é encerrada. */
  return product.name === 'Magic Mouse';
});

console.log({ findIndex });

/* <==> <==> <==> <==> <==>.some()<==> <==> <==> <==> <==>

Percorre o array quando ele encontrar algum item que seja
verdadeiro mediante determinada condição impelementada na
sua função de callback, então ele irá retornar um boolean
para o item encontrado. */

const some = array.some((product) => {
  /* Irá retornar true para o terceiro item da lista.*/
  return product.quantity > 2;
});

console.log({ some });

/* <==> <==> <==> <==> <=>.every()<=> <==> <==> <==> <==>

Percorre o array e verifica se todos os itens respeitam a
regra que foi determinada na condição em sua implementada
na sua função de callback, e assun retornará um boolean*/

const every = array.every((product) => {
  /* Retornará true pois para todos os itens será verdade
  */
  return product.price >= 1000;
});

console.log({ every });

/* <==> <==> <==> <==> <==>.map()<==> <==> <==> <==> <==>

Com base no array anterior, ele cria um novo array com as
alterações realizadas em cada item ou com os itens que se
adequem às regras realizadas na sua função interna, mas é
importante frizar que sempre ele retornará um array com o
mesmo numero de posições que o original. Ele coloca o que
retornamos na função de callback em cada posição do array
*/

const map = array.map((product) => {
  /* Irá retornar um novo array contendo tres objetos que
  possuiem as propriedades de product mais uma nova que é
  subtotal em cada item.  */
  return {
    ...product,
    subtotal: product.quantity * product.price
  };
});

console.log({ map });

/*<==> <==> <==> <==> <=>.filter()<=> <==> <==> <==> <==>

Podemos fazer uma validação para filtrar o array, remover
dele os elementos que não respeitam as condições da nossa
validação. O filter criará um novo array, contendo apenas
os itens que atendam às regras da nossa validação.*/

const filter = array.filter((product) => {
  /* Irá retornar um novo array com apenas duas posições.
   */
  return product.quantity > 1;
});

console.log({ filter });

/*<==> <==> <==> <==> <=>.reduce()<=> <==> <==> <==> <==>

Transforma nosso array em um outro tipo de dado, seja ele
qual for. Ele recebe dois parametros, primeiro uma função
e segundo o valor inicual do retorno deste reduce.

Para esta função do primeiro parametro do reduce temosque
passar dois parametros:*/

const acucumulatorReduce = array.reduce((accumulator, product) => {
  /*
  -> accumulator: que é uma variável que se comporta como a
  variavel que usamos fora das nossas iterações normais, um
  for ou while. tipo uma variavel 'contador', porém esta se
  inicia com o valor do segundo parametro do reduce e então
  a partir dai ela vai sendo sobrescrita com o valor que se
  retorna em cada iteração no array.
  */
  console.log(accumulator);
  return accumulator + 1;
}, 0);

console.log({ acucumulatorReduce });

const totalCompas = array.reduce((accumulator, product) => {
  /* -> item: neste caso será a variável que vai guardar o
  valor do item que está armazenado naquela posição do seu
  array. */
 return accumulator + (product.quantity * product.price)
}, 0);

console.log({ totalCompas });

