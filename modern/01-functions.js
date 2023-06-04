/* Principais diferenças entre funções tradicionais e arrow functions */

/* >=> >=> >=> >=> >=> >=> this <=< <=< <=< <=< <=< <=<
                     ARROW FUNCTION

 em arrow functions o objeto this tem escopo global. ou seja o this tem o
 mesmo valor do this do escopo no qual esta função foi implementada.
*/

this.name = 'Julio'

const minhaArrowFunction = () => {
  //o nome 'Julio' será mostrado, pois o valor é o mesmo.
  console.log(this.name);
}

/*
                      FUNÇÃO TRADICIONAL

  em funções tradicionais, o objeto this tem escopo próprio, ou seja, o this tem
  um valor próprio
 */

function minhaFuncaoTradicional() {
  //será undefined pois this.name não foi definido no escopo desta função
  console.log(this.name);
}



minhaArrowFunction();
minhaFuncaoTradicional();


/* >=> >=> >=> >=> >=> >=> funções como construtor (new) <=< <=< <=< <=< <=< <=<

Em JavaScript podemos utilizar funções como construtores para criar objetos atraves
da palavra reservada new. Quando usamos new para chamar uma função esta função é
chamada de construtor e retorna um novo Objeto.


                      FUNÇÃO TRADICIONAL

Funções tradicionais podem ser usadas como construtores pq elas tem poder para criarem
seus proprios escopos e valores para this. Poretanto podemos criar objetos com elas.
 */

function Pessoa(nome) {
  /* Ao utilizar o this, esta função passa a ser um construtor e a declaração da função
  'muda de cor' pois passa a retornar um objeto agora. */
  this.nome = nome
}

//Podemos instanciar um objeto chamando a função pessoa, usando a palavra 'new'
const pessoa = new Pessoa('Julio');
console.log(pessoa);

/*                       ARROW FUNCTION

Já nas arrow functions isto não é possível. Elas não podem ser usadas como construtores pois não
possuem um seu proprio valor de 'this' vinculado. Elas capturam o valor do contexto no qual elas
foram declaradas e este valor não pode ser alterado usando 'new'.
*/

const Carro = (modelo) => {
  /* Podemos ver que nada de diferente acontece, so pq utilizamos o this. Esta função não foi convertida
  em um construtor. */
  this.modelo = modelo
}


/* Esta chamada irá retornar o seguinte erro:  */
const novoCarro = new Carro('fusca'); //TypeError: Carro is not a constructor
