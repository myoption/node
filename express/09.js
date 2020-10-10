/* 
POST 参数请求获取
需要body-parser模块
使用app.use拦截请求
*/
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
/* 
 extended: false  方法使用qureystring模块处理请求参数的格式
 extended: true   使用第三方模块qs处理请求参数
*/
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", (req, res) => {
    // console.log(req.body);
    res.send(req.body);
 });
app.listen(3000);