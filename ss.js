const http = require('http');

http.createServer(
	(req,res)=>{
		console.log(req.headers,req.method);
		
		switch (req.method) {
			case "GET":
				res.write("get ok");
				res.end();
				break;
				
			case "POST":
				let obj = {name:"shaq",id:32};
				res.setHeader("Content-Type","text/json;charset=UTF-8");
				res.write(JSON.stringify(obj));
				res.end();
				break;
		}
	}
).listen(3333);