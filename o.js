"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var s = new rxjs_1.Subject();
var so = s.asObservable();
so.subscribe(function (s) {
    console.log(s);
});
s.next("ok");
