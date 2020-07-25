// const express = require('express');

// const app = express();

// app.get('/api/greeting', (req, res) => {
    //   const name = req.query.name || 'World';
    //   
    //   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
    // });
    
    // app.listen(3001, () =>
    //   console.log('Express server is running on localhost:3001')
    // );
    
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require('cors')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(cors());
app.options('*',cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const clientId = process.env.CID;
const clientSecret = process.env.CS;

app.get('/api/auth', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ url: `https://github.com/login/oauth/authorize?client_id=${clientId}` }));
});

app.listen(3001);
console.log('App listening on port 3001');