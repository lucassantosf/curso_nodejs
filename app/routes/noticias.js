module.exports = function(aplication){	

	aplication.get('/noticias', function(req, res){
		
		var connection = aplication.config.dbConnection();
		var noticiasModel = aplication.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			res.render("noticias/noticias", {noticias:result});

		});		
	});

	
};