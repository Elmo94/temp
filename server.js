var data = '';
const request = require('request');

function getData(){
request({
  url: 'https://opendata.hopefully.works/api/events',
  headers: {
     'Authorization': 'Bearer *****' // <--- replase stars with your own access token
  },
  rejectUnauthorized: false
}, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        console.log(res.body);
		data = res.body;
		var fs = require('fs');
		fs.readFile('data.json', function(err, inP){
			if (err) {
				console.log('data.json not found. Creating new file');
			}
			else {
				data = data + ', ' + inP;
			}
			fs.writeFile('data.json', data, function(err){
			if (err) {
				console.error(err);
			}
			console.log('complete');
			});
		});
		
      }

});
}

getData();
setInterval(getData, 1000*60*60); //loops once in hour
