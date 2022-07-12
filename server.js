const express = require('express');
const bodyParser = require('body-parser')
const connect = require('./db')
const port = 2000 | process.env.PORT; 
require('dotenv').config();
const app = express();
connect();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.use('/question',require('./route/question'));
app.use('/user',require('./route/user'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/quiz',(req,res)=>{
    res.render('quiz');
})

app.listen(port,()=>{
    console.log('server start');
})