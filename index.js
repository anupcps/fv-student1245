var express = require('express');
var app = express();
var path = require('path');


app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/views');
app.use('/', express.static('public'));


app.get("/", (req, res) => {

    res.render('index')
})


app.listen(8080, () => {
    console.log("App is running at the por ..." + 8080);
})