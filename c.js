function demo() {
    var promise = new Promise(function (resolve, reject) {
        // logic will go here ..
        resolve("hohoho););
    });
}
demo().then(function () { console.log("then"); } // logic goes here ..
);
