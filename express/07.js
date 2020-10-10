/* 
构建模块化路由
*/
const express = require("express");
const app = express();
//创建路由对象
const home = express.Router();
//将路由对象和请求路径进行匹配
app.use("/home", home);
//在home路由下继续创建路由
home.get("/index", (req,res) => {
    res.send("welcome to homePage")
})
app.listen(3000);