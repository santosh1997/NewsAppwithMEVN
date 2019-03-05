var express = require('express');
var con = require('./db');
var router = express.Router();
var controller = require('./controller');

router.get('/api/v1/news',function(req,res){
	controller.fun.getAll(req,res);
});
router.get('/api/v1/news/categories/:category',function(req,res){
	controller.fun.getByCategory(req,res);
});
module.exports = router;