const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var data = '';

const server = http.createServer((req, res) => {
  res.end('Below this should be data \n' + JSON.stringify(JSON.parse(data),null, 4));
});

const request = require('request');

request({
  url: 'https://opendata.hopefully.works/api/events',
  headers: {
     'Authorization': 'Bearer ********' // <--- replase stars with your own access token
  },
  rejectUnauthorized: false
}, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        console.log(res.body);
		data = res.body;
      }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});