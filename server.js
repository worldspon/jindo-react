const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const proxy = require('express-http-proxy');

app.use(express.static(__dirname + '/build'));

app.get('/api/*', (req,res, next) => {
  console.log('GET');
  next();
}, proxy('http://211.192.165.100:5055'));
app.post('/api/*', (req, res, next) => {
  console.log('POST');
  next();
}, proxy('http://211.192.165.100:5055'));
app.patch('/api/*', proxy('http://211.192.165.100:5055'));
app.put('/api/*', proxy('http://211.192.165.100:5055'));
app.delete('/api/*', proxy('http://211.192.165.100:5055'));

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/login/login.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});