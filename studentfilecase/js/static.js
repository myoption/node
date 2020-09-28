//模块 serve-static 创建静态资源服务 并指定静态资源目录
const serveStatic = require("serve-static");
const path = require("path");
//启用访问 指定目录
console.log(__dirname);
const serve = serveStatic(path.join(__dirname, "../static"));
console.log(path.join(__dirname, "../static"));
module.exports = serve;
