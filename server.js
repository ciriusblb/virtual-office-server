// Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Set port
const port = process.env.PORT || '8000';
app.set('port', port);


//importar rutas
var appRoutes = require('./apps/routes/app');

var usuarioRoutes = require('./apps/routes/user.route');
var afiliadoRoutes = require('./apps/routes/afiliado.route');
var accountHistory = require('./apps/routes/accountHistory.route');

var loginRoutes = require('./apps/routes/login.route');



// Routes
app.use('/usuario',usuarioRoutes);
app.use('/afiliado',afiliadoRoutes);
app.use('/accountHistory',accountHistory);
app.use('/login',loginRoutes);

app.use('/',appRoutes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
