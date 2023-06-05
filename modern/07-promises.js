/* Ao criar uma função desta forma, é já é lançada dentro
da Call stack e executada, pois é uma função sincrona. Ou
seja ao executar, teremos o retorno no console. desde que
o console.log da linha "6" esteja descomentado.*/
const promiseNaoResolvida = new Promise((resolve, reject) => {
  //console.log('dentro da promise')
});

/* Quando executamos esta chamada, teremos um retorno de
 valor: "Promise { <pending> }" no console, uma promises
 sõ é resolvida apenas se ela for resolvida ou rejeitada
 utilizando alguma dessas funções "resolve" ou "reject"*/
console.log(promiseNaoResolvida);

const promiseResolvida = new Promise((resolve, reject) => {
  /* Neste caso teremos uma promise resolvida com sucesso
   */
  resolve('Sucesso');
})
/* O resultado será "Promise { 'Sucesso' } no console".*/
console.log(promiseResolvida);

/* <==> <==> <==> <==> IMPORTANTE <==> <==> <==> <==>

Os exemplos de Promises utilizados nestes exemplos logo
não são condizentes com a real utlização de promises no
dia-a-dia. Na verdade utlilizamos Promises quando nossa
aplicação precisa realizar chamadas que podem ter algum
gargalo de tempo de execução. Por exemplo, chamadas pra
banco de dados, chamadas para API`s dentre outros casos
*/

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    /* Será executado após 2000 milissegundos. */
    //resolve({ response: 'Sucesso!' });
    reject({ error: 'Deu erro!' });
  }, 2000);
});

/* Nesta chamada receberemos: "Promise { <pending> }"
caso o console.log da linha 45 esteja descomentado, e
depois de 2 segundos o nosso código irá deixar de ser
executado. */
//console.log(apiCall);

/* Para conseguir executar esta promises existem duas
abordagens, utilizando os metodos "then" ou o "catch"
com isto vamos ver o exemplo com o then.*/

apiCall
  .then((resolve) => {
    /* Coloquei o parâmetro "resolve" só pra facilitar
    o entendimento, mas poderia ter qualquer nome, este
    parametro irá representar a resposta da promise. */
    console.log(resolve);
  })
  .catch((reject) => {
    /* Neste caso, se a nossa promise for resolvida por
    um "reject" então podemos utilizar o metodo catch e
    capturar o erro que será lançado. Para testar basta
    comentar a linha 36 e descomentar a linha 37 */
    console.log(reject);
  });
