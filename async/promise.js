const { log } = require("console");
//promise解决回调地狱问题
const fs = require("fs");

let promise = new Promise((resolve, reject) => {
  fs.readFile("./100.txt", "utf8", (err, result) => {
    if (err != null) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
//then 就是resolve catch就是reject
promise.then((result) => console.log(result)).catch((err) => console.log(err));
