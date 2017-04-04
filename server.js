var express = require('express')


/* Configs/Const */

var hostname = 'localhost'
var port = 5000

/* Init */

var app = express()



app.use(express.static(__dirname + '/public'));



app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`)
});
