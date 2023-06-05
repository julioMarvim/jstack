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
    resolve({ response: 'Sucesso!' });
    //reject({ error: 'Deu erro!' });
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
    console.log('[Chamada com then: ]', resolve);
  })
  .catch((reject) => {
    /* Neste caso, se a nossa promise for resolvida por
    um "reject" então podemos utilizar o metodo catch e
    capturar o erro que será lançado. Para testar basta
    comentar a linha 36 e descomentar a linha 37 */
    console.log('[Chamada com catch: ]', reject);
  });


/* <==> <==> <==> <==> async/await <==> <==> <==> <==>

Semelhantemente a forma de utilizar then e catch usando
nós podemos capturar as respostas e os erros de funcões
assicronas usando await no momento da chamada para essa
função. Porém esta função precisa ser chamada dentro de
uma outra função que esteja assinada com a key asinc no
momento de declaração como mostra a seguir.*/

async function run(){
  /* Para fazer com que os erros sejam capturados será
  necessário envolver a chamada da função com e tratar
  os erros com try catch, assim o erro retornado com a
  função 'reject' será armazenado dento de 'erro'. */
  try {
    const resposta = await apiCall;
    console.log('[Chamada com await: ]', resposta);
  } catch (erro) {
    //dara erro se a linha 37 estiver descomentada.
    console.log('[Chamada com await: ]', erro);
  }
}

run();

/* <==> <==> <==> <==> IMPORTANTE <==> <==> <==> <==>

Quando precisamos de utilizar o retorno de uma chamada
assincrona, no caso de usarmos then e catch, então nós
precisamos colocar o consumo deste retorno nas chamada
dentro deo then. Ou então utilizar o assinc await. */
