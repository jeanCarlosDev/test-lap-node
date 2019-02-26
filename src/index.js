var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config')
var app = express();
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
})


app.use('/', (req, res, next) => {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/employee/getAll', (req, res)=>{
   
    pool.query('SELECT * FROM employee ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows);
    })


});

app.post('/employee/save',(req, res)=>{
   const { first_name, last_name, participation } = req.body;
   
   pool.query('INSERT INTO employee (first_name, last_name, participation) VALUES ($1, $2, $3)', [first_name, last_name, participation], (error, results) => {
      if (error) {
          res.json({ 
            status:400,
            msg:'All fields are mandatory and Participation must be a number.'  
          }); 
      }else{
      
        res.json({ 
          status:200,
          msg:'User successfully registered!'  
        });
      }
      
    });
  
});

app.listen(config.port, ()=>{
    console.log('Server is running on port : ' + config.port);
});