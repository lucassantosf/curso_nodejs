/* importas as configurações do servidor */

var app = require('./config/server');

/* parametrizar a porta de escuta */

var server = app.listen(82, function(){
	console.log('Servidor online');
});

var io = require('socket.io').listen(server); // desta forma, requisições para a porta 82 são recebidas requisições http tanto , websockets

app.set('io',io);

/* criar a conexao para o websocket */
io.on('connection', function(socket){
	console.log('Usuario conectou');
	
	socket.on('disconnect',function(){
		console.log('usuario desconectou');
	});

	/* dialogo */
	socket.on('msgParaServidor', function(data){
		
		socket.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		/* participantes */
		if(parseInt(data.apelido_atualziado_nos_clientes) == 0) {
			
			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
	});

});