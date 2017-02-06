module.exports = function(aplication){	

	aplication.get('/noticias', function(req, res){
		
		var connection = aplication.config.dbConnection();
		var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias(function(error, result){
			res.render("noticias/noticias", {noticias:result});
		});
				
	});

	
};