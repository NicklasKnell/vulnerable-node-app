var express = require('express');

var app = express();
app.use(express.static('public'));


app.get("/", function (_, res) {
    res.sendFile('index.html');
})

app.get('/query', function (req, res) {
    console.log(req.query.q);
    res.send(JSON.stringify('Result: ' + eval(req.query.q)));
});


app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});