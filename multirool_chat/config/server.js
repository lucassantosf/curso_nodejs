/* 1 importar o mod do framework express */
var express = require('express');

/* 2 importar o mod do consign*/
var consign = require('consign');

/* 3 importar o mod body-parser */
var bodyParser = require('body-parser');

/* 4 importar o mod do express-validator*/
var expressValidator = require('express-validator');

/* 5 iniciar o objeto do express */
var app = express();

/* 7 setar as variaveis 'view engine' e 'views  do express'*/
app.set('view engine', 'ejs');
app.set('view', './app/views');

/* 8 configurar o middleware - express.stat*/
app.use(express.static('./app/public'));

/* 9 configuar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* 10 configurar o middleware express-validator */
app.use(expressValidator());

/* 11 efetua o autoload das rotas, dos módulos e dos controllers para o obj app*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* 6 exportar o objeto app*/
module.exports = app;