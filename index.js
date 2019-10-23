const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('IBM is awesome!')
});

app.listen(8080, () => {
  console.log('GO BIG BLUE!')
});