module.exports = function(application){

	application.get('/formulario_add_noticia', function(req, res){
		application.app.controllers.admin.formulario_add_noticia(application, req, res);
	});

	application.post('/noticias/salvar', function(req, res){
		application.app.controllers.admin.noticias_salvar(application, req, res);
	});

};

