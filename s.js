const express = require("express");
const app = express();
const port = 3333;

app.get(
"/",
(req,res)=>{
	res.send("root test");
});

app.get(
"/test2",
(req,res)=>{
	console.log(req);
	res.send("get ok");
});

app.post(
"/test3",
(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	res.status(200).send("post ok");
});


app.listen(port, ()=>{
	console.log("Listening at port ",port);
});

