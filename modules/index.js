/* Modulos são conjuntos de código.
  3 Tipos de módulos:
  -> TODOS os arquivos JavaScript são módulos;
  -> Módulos nativos, métodos já disponibilizados pelo Node.js;
  -> Pacotes do npm (Node Package Manager);
*/

/* Como estamos enviando um objeto, podemos fazer uma desestruturação
e extrair os valores desejados. */
const {printName, lastName, printAge} = require('./pintName');

printName(`Julio ${lastName}`);
printAge(31);


//caso não desestruture, e importe o modulo inteiro.
//modulo.printName(`Julio ${modulo.lastName}`);