const p = new Promise(
	(res)=>{
		let somevar=false;
		setTimeout(()=>{
			somevar = true;
			return res({a:27});
		},2000);
	}
);


p.then((v)=>{console.log(v); return v;});