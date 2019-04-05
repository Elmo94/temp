const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var json = '';
var script = '';

const server = http.createServer((req, res) => {
	var fs = require('fs');
	fs.readFile('data.json', function(err, data){
		if (err) {
			console.error(err);
		}
		else {
			json = "[" + data + "]";
			
		}
	});
	
	/* Prepare javascript for HTML file */
	fs.readFile('script.js', function (err, data) {
		if (err) {
            console.error(err);
        } else {
			script = "<script>" + data + "data = " + JSON.stringify(JSON.parse(json),null, 4) + ";\nCreateTableFromJSON();</script>";
		}
	});
	res.writeHead(200,{
		'Content-Type':'text/html'
	});
	/* Generate HTML page */
	fs.readFile('page.html', function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.write(data + script); 
		}
        res.end();
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
