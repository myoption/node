//模板配置
//向模板中导入变量 template.defaults.imports
const dateFormat = require("dateformat");
const template = require("art-template");
const path = require("path");
//第一个参数 模板路径 绝对路径
// const views = path.join(__dirname, "views", "06.art");
//导入模板变量 其他模块提供的方法
template.defaults.imports.dateFormat = dateFormat;
//设置模板根目录
// console.log(__dirname);
template.defaults.root = path.join(__dirname, "views");
//设置模板默认后缀 当省略时 使用默认配置的后缀
template.defaults.extname = ".art";
//返回拼接之后的字符串
const html = template("06", { time: new Date() });
console.log(html);
