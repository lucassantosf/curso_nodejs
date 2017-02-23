/* importas as configurações do servidor */

var app = require('./config/server');

/* parametrizar a porta de escuta */

var server = app.listen(82, function(){
	console.log('Servidor online');
});

require('socket.io').listen(server); // desta forma, requisições para a porta 82 são recebidas requisições http tanto , websockets