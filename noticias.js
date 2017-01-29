var http = require('http');

var server = http.createServer(function(req, res){
	

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Tecnologia</body></hmtl>");

	}else if(categoria == '/moda'){
		res.end("<html><body>Moda</body></hmtl>");
	}else if(categoria == '/beleza'){
		res.end("<html><body>Moda</body></hmtl>");
	}else{
		res.end("<html><body>Principal</body></hmtl>");
	}
	
}).listen(3000);
