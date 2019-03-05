var con = require('./db');

exports.fun = {
	getByCategory : function(req,res){
		var category = req.params.category;
		con.query("SELECT * FROM codebrahmanews.news WHERE category=?",[category],function(err,result){
			res.json(result);
		});
	},
	getAll : function(req,res){
		con.query("SELECT * FROM codebrahmanews.news",function(err,result){
			res.json(result);
		});
	}
}
