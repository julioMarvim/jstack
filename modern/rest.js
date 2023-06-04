const user = {
  firstName: 'Julio',
  lastName: 'Ribeiro',
  age: 31,
  instagram: '@marvim.code',
  skills: ['back-end', 'aws', 'design systems'],
}


/* <==> <==>  REST(RESTO) OPERATOR <==> <==>

Recebe todo o resto das propriedades ou posições de um array
durante a desestruturação. É obrigatorio ser definido como o
ultimo item utilizando a sintaxe "..." antes da declaração.*/
const { firstName, skills, ...restoObjeto } = user;
const [primary, ...restoAray] = skills;

console.log(firstName, primary);
/* Irá mostrar todos os outros itens que não foram armazenados
em variáveis. */
console.log(restoObjeto, restoAray);
