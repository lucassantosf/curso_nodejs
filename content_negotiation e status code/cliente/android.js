var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port : 86,
	path : '/',
	method: 'get',
	headers : {
		'Accept' : 'application/json',
		'Content-type' : 'application/json '
	}
}
/*
// Content-type 

var html = 'nome=Lucas' // x-www-form-urlencoded
var json = {nome: 'Lucas'};
var string_json = JSON.stringify(json);
*/
var buffer_corpo_response = [];

var req = http.request(opcoes, function(res){
	
	res.on('data', function(pedaco){
		buffer_corpo_response.push(pedaco);
	});

	res.on('end', function(){
		var corpo_response = Buffer.concat(buffer_corpo_response).toString();
		console.log(corpo_response);
		console.log(res.statusCode);
	});

});

//req.write(string_json);

req.end();