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

console.log(find);

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
