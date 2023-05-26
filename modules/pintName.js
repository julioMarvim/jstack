exports.printName = (name) => {
  console.log(name);
}

/* Neste caso podemos ja exportar diretamente a informação
desejada. Estou utilizando a sintaxe de arow function. */
exports.printAge = (age) => {
  console.log(age);
}

//estou exportandao cada uma das propriedades separadamente.
exports.lastName = 'Ribeiro';

/* Neste momento estou dizendo para o node, 
quais informações eu quero que sejam acessiveis
em outros módulos.*/
//module.exports = { printName, lastName };