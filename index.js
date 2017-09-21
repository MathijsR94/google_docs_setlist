require('dotenv').config();

const express = require('express');
const fs = require('fs');
const parse = require('csv-parse');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const inputPath = './data/nummers.csv';

  fs.readFile(inputPath, (err, fileData) => {
    parse(fileData, { columns: true, trim: true }, (parseError, data) => {
      res.render('index', { data });
    });
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
