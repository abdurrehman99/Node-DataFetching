const express = require('express');
const bodyParser = require('body-parser');
var xlsxtojson = require("xlsx-to-json");

//Init app
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

 

app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
});

app.get('/xlstojson', (req,res)=> {
	xlsxtojson({
		input: "./excel.xlsx",  // input xls 
        output: "output.json", // output json 
        // sheet : "M.Phil.",
	    lowerCaseHeaders:true
	}, (err, result)=> {
	    if(err) {
	      res.status(400).json(err);
	    } else {
		  res.status(200).json(result);
		  console.log(result);
	    }
	});
});

app.listen(5000, () => console.log(`Node Server running !`));