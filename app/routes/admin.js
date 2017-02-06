module.exports = function(aplication){

	aplication.get('/formulario_add_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao:{}, noticia:{}});
	});

	aplication.post('/noticias/salvar', function(req, res){
		var noticia = req.body;		

		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Noticia é obrigatório').notEmpty();

		var erros = req.validationErrors();

		console.log(erros);

		if(erros){
			res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia });
			return;
		}

		var connection = aplication.config.dbConnection();
		var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
	});

};

