//引入文件模块
const fs = require("fs");
//readFile('文件路径'[,'文件编码'],callback)
fs.readFile("./01export.js", "utf-8", (err, msg) => {
  //err 不为空 则读取出错
  if (err === null) {
    console.log(msg);
  }
});
//writeFile('文件路径/名称','数据',callback)
fs.writeFile("./01export.js", "console.log(写入成功);", (err, content) => {
  if (err === null) {
    console.log(content);
  }
});
//不同同时对一个文件进行读 写
