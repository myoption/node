//子模板
const template = require("art-template");
const path = require("path");
//第一个参数 模板路径 绝对路径
const views = path.join(__dirname, "views", "03.art");
//返回拼接之后的字符串
const html = template(views, { msg: "我是首页" });
console.log(html);
