var express= require("express");
var app = express();
app.use(express.static("public"));

//---- Express middleware ----

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

var server= require("http").createServer(app);
server.listen(3000, console.log("server dang chạy"));

app.get("/", function(req,res){
    res.send("hello");
})


//cài bodyparser
var bodyParser= require("body-parser").json();

app.post("/form",bodyParser, function(req,res){
     console.log(req.body);
    //res.send({name: "xin chào"});
    res.send(req.body);
})

app.post("/form1",bodyParser, function(req,res){
   
    res.send(req.body.name);
})