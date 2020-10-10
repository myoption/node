/* 
GET 参数请求获取
*/
const express = require("express");
const app = express();
app.get("/index", (req, res) => {
    //获取get请求参数 返回对象
   res.send(req.query);
})
app.listen(3000);