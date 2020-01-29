const express = require('express');
const bodyParser = require('body-parser');

//Init app
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
})

app.listen(5000, () => console.log(`Node Server running !`));