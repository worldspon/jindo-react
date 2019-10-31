// const express = require('express'); // express 모듈 추가하기

// const app = express();
// const port = 3000;
// const path = require('path');



// app.get('/board/content/:id', middle);

// function middle (request, response) {
//   response.sendFile(path.join(__dirname + '/template/main.html'));
// }


// app.post('/a', loginCheck, (req, res) => {
//   const {name, age} = req.body.user;
//   axios.get('');
//   // user: { name: 'hong', age: 13}
// });

// function loginCheck(req, res, next) {
//   axios
//   if (response) {
//     if (response.login) {
//       next();
//     }
//   }
// }

// app.listen(port, function(err) {
//   console.log('Connected port - ' + port);
//   if (err) {
//     return console.log('Found error - ', err);
//   }
// });

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const proxy = require('express-http-proxy');

app.use(express.static(__dirname + '/build'));

app.get('/api/*', proxy('http://211.192.165.100:5055'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/ad', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/adprofit/adprofit.html'));
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});