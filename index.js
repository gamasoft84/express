const createHandler = require('azure-function-express').createHandler;
const app = require('express')();

app.get('/greet', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = createHandler(app);