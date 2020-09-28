const http = require("http");
const server = http.createServer();
//导入数据库
const Student = require("./js/database.js");
/* Student.create({
  naem: "张三",
  age: 18,
  sex: "男",
  email: "54555@qq.com",
  hobbies: ["睡觉", "打篮球"],
  college: ["计算机学院"],
  date: "2020-09-28",
});
 */
//导入路由
const router = require("./js/router.js");
//导入静态资源
const serve = require("./js/static.js");
//监听服务器事件
server.on("request", (req, res) => {
  //使用第三方模块 router 进行路由管理
  router(req, res, () => {});
  serve(req, res, () => {});
});
server.listen("3000");
console.log("启动成功");
