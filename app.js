'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})

const rootController = require('./routes/index');
const ceosController = require('./routes/ceos');

app.use('/', rootController);
app.use('/ceos', ceosController);