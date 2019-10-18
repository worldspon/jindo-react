const express = require('express'); // express 모듈 추가하기

const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/public'))
console.log(__dirname);

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/template/main.html'));
});

app.listen(port, function(err) {
  console.log('Connected port - ' + port);
  if (err) {
    return console.log('Found error - ', err);
  }
});