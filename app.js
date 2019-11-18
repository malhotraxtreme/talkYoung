var express = require('express');
var path = require('path');
var data = require('./main/data.json');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'main')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/login', require('./routes/login'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/match', require('./routes/match'));






app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});