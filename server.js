var app = require("express");

var service = require("./service/appservice");

var server = app();

server.use(app.json());

server.use(app.static("static"));

server.get("/pay",async (req,res)=>{
    res.contentType("application/json");
    let peoples = await service.getPeoples();
    console.log(peoples);
    res.send(peoples);
});


server.post("/pay",(req,res)=>{
    service.addPeople(req.body);
    res.send("");
});

var port = process.env.PORT || 80;

server.listen(port,"0.0.0.0",()=>{
    console.log("Listen");
});