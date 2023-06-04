const user = {
  first_Name: 'Julio',
  lastName: 'Ribeiro',
  age: 31,
  instagram: '@marvim.code',
  skills: ['back-end', 'aws', 'design systems'],
}

/* <==> Destructuring <==> */
/* Podemos renomear proriedades utilizando : e novo nome durante
a desestruturação. */
const { first_Name: firstName, age, skills } = user;
/* Podemos aplicar a desestruturação em arrays.
Fazemos isso dessa forma, e cada item do array sera
amarmazenado na constante da posição da desestuturação. */
const [primary, secundary, tertiary] = skills;

console.log(firstName, age, skills);
console.log(primary, secundary, tertiary);
