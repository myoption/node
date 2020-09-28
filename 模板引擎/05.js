//模板继承
const template = require("art-template");
const path = require("path");
//第一个参数 模板路径 绝对路径
const views = path.join(__dirname, "views", "05.art");
//返回拼接之后的字符串
const html = template(views, { title: "模板配置" });
console.log(html);
