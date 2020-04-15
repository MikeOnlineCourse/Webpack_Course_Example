import "../index.html";
import "../scss/index.scss";

/* import ES6*/
import Obj from "./import-file/Obj.js";
import LogFn from "./import-file/LogFn.js";
console.log("object:", Obj);
LogFn("===> 引用function");

/* require Commonjs*/
const Arr = require("./require-file/Arr.js");
const GetRandom = require("./require-file/GetRandom.js");
console.log("Array:", Arr);
console.log("亂數function =>", GetRandom(1, 50));