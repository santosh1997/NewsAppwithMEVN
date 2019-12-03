var mysql = require('mysql');

const con = mysql.createConnection({
	host : "****",
	user : "****",
	password : "****",
	database : "news",
	multipleStatements: true
});

module.exports = con;
