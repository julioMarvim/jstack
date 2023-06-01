const express = require('express');
const routes = require('./routes');

const app = express();
/* Esta chamda é importante para fazer o bodyParser para as
requisições do tipo POST, PUT e PATCH */
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
