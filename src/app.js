const express = require('express');
require('./database');
const Persona = require('./persona');

const app = express();

app.use(require('./routes/index.routes'));



app.listen(4000);
console.log('Server on port', 4000);
