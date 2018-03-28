const express = require('express');
const app = express();
const port = 3000;

var mongoose = require('mongoose');
var db = mongoose.connection
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})