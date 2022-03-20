var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.text({
    type: function (req) {
        return 'text';
    }
}))

app.post('/echo', function (req, res) {
    // console.log(`body: ${req.body}`);
    res = res.status(200);
    if(req.get('Content-Type')){
        // console.log("Content-Type: "+req.get('Content-Type'))
        res = res.type(req.get('Content-Type'))
    }
    res.send(`Return is ${req.body}`)
})

http.createServer(app).listen(process.env.PORT || 3000)