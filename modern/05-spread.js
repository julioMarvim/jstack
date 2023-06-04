const user = {
  firstName: 'Julio',
  lastName: 'Ribeiro',
  age: 31,
  instagram: '@marvim.code',
  skills: ['back-end', 'aws', 'design systems'],
  active: false,
}


/* <==> <==>  SPREAD (ESPALHAR) <==> <==>

Utilizamos o operador spread para espalhar os dados
de um objeto para outro objeto. a sintaxe é similar
à sintaxe do rest operator, porém o novo objeto irá
receber todos os dados do atual objeto.
*/

const novasSkills = ['Musica', 'Guitarra', 'Bateria']

const newUser = {
  /* Neste momento newUser recebeu todos os dados de
  user inclusive ative false. */
  ...user,
  /* Porém em JS quando temos duas propriedades com o
  mesmos valor, o ultimo valor a ser setado para esta
  propriedade é o que vai prevalecer, sendo assim ela
  será sobrescrita por um novo valor true. */
  active: true,
  /* A mesma ideia funciona também para arrays. Veja
  que eu sobrescrevi o array de skills acrescentando
  novas skills.*/
  skills: [...user.skills, 'Musica', 'Guitarra', 'Bateria'],
}

console.log({user});
console.log({newUser});
