/* Esta é a sintax do CommonJS, mas pelo que percebi
não é mais tão utilizada. A que forma que está sendo
mai usada hj em dia é a ES Modules que mostro abaixo
 */

/* module.exports = function sayHello(name) {
  console.log(`Olá ${name}`);
} */

/* Esta é a forma ES Modules. Seria uma a exportação
default onde podemos importar usando nome qualquer*/
export default function sayHello(name) {
  console.log(`Olá, ${name}`);
}
/* Posso exportar assim tbm */
//export default sayHello;

/* Se eu quiser que a função seja exportada como uma
função nomeada, só fazer desta forma: */
/* Agora seremos obrigados a fazer a exportação pelo
nome sayCocoGrande. Mas ele pode mudar o nome depois
Mostro isso no arquivo que importa este. */
export function sayCocoGrande() {
  console.log('Cocô grande!');
}

/* Posso fazer a exportação nomeada assim também. */
export { sayCocoGrande };
