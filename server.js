const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'spa')));

app.get('/', function(req, res) {
	res.redirect('index.html');
});




app.listen(port);
console.log( 'Server started at http://localhost:' + port);
