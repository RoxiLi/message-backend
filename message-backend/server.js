const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');

const config = require('./config');
const router = require('./network/routes')

// conexión a la base de datos
db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
socket.connect(server);

router(app);
app.use('/'+ config.publicRoute,express.static('public'));

server.listen(config.port, function () {
    console.log('Escucha la app en' + config.host + ':' +
        config.port)
});

