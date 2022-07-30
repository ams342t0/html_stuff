function demo() {
	var promise = new Promise((resolve, reject) => {
	// logic will go here ..
		resolve("hohoho);
	});
}

demo().then(
	()=> {console.log("then");}// logic goes here ..
);