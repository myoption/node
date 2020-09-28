const template = require("art-template");
const path = require("path");
//注意路径 __dirname 是当前文件绝对路径
template.defaults.root = path.join(__dirname, "../views");
module.exports = template;
