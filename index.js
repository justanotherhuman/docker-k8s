const express = require('express');
const redis = require('redis');
const process = require('process')

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379 //default port number for redis
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0); //exit status code of 0, everything is OK 
  client.get('visits', (err, visits) => {
    res.send('IBM is awesome!, Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log('GO BIG BLUE!')
});