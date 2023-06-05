/* Esta é a forma do CommonJS */
//const sayHello = require('./sayHello');

/* Esta é a forma do ES Modules, pq durante o import
eu mudei o nome dela pq ela não é uma funcão nomeada
*/
import qualquerNome,
/* Aqui eu trago as exportações nomeadas. */
{ sayCocoGrande as cocoGrande } from "./sayHello.js";

qualquerNome('Julio');
/* Na linha 8 eu mudei o nome da função. Mas precisei
explicitamente dizer qual a função queria mudar pq se
não, não iria funcionar. */
cocoGrande();


/* <==> <==> <==> <==> IMPORTANTE <==> <==> <==> <==>

Para utilizar esta forma ES Modules existem duas formas

-> mudando as extensões para .mjs e importando tosos os
arquivos, colocando a extensão './sayHello.mjs' fazendo
os imports.

-> incluindo a propriedade typo: modules no arquivo de
package.json do projeto. Mesmo assim será necessário a
inclusão da extensão .js durante o import do modulo.

*/
