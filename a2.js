async function f(){
	let p = new Promise((res,rej)=>{
		setTimeout(()=>{
			res("main task done"); // this is the async work
			x.get.subscribe(...)
			(r)=>{
				res(r);
			}
		},1000);
	});

	let r = await p;

	console.log(r);
	console.log("done.");
}


f();