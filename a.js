async function f()
{
let p = new Promise(
	(res,rej)=>{
		res(25);
		
	}
);
	let r = await p.then((r)=>{console.log(r);});
	
	console.log(r);
}


f();