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

// app.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Max-Age", "3600");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//     next();
// });

// // configuration
// app.use(express.static(__dirname + '/public'));                
// app.use('/public/uploads',express.static(__dirname + '/public/uploads'));  

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
	    }
	});
});

app.listen(5000, () => console.log(`Node Server running !`));