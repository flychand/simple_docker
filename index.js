//Load express module with `require` directive
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());
// this.app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }))

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/calculator/:opt?',function(req,res) {
    console.log("simple calulator")
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    var calc = req.params.opt.toUpperCase();
    var result = 0;

    if(calc== "ADD" ){
        console.log("add")
        result = num1 + num2
        res.status(200).send((result).toString());
    }
    if(calc== "SUB" ){
        console.log("sub")
        result= num1 - num2
        res.status(200).send((result).toString());
    }
    if(calc== "MUL" ){
        console.log("mul")
        result= num1 * num2
        res.status(200).send((result).toString());
    }
    if(calc== "DIV" ){
        console.log("div")
        result= num1 / num2
        res.status(200).send((result).toString());
    }
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})