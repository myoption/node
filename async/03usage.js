const fs = require("fs");
//引入模块中的方法
const promisify = require("util").promisify;
//对异步接口进行改造
let readFile = promisify(fs.readFile);

async function run() {
  let r1 = await readFile("./1.txt", "utf8");
  console.log(r1);
}
run();
