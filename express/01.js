const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //send() 方法进行响应
    /* 
    1.该方法自动检测响应内容的类型
    2.自动设置http状态码
    3.自动设置响应的内容类型及编码
     */
    res.send("hello express");
})
app.listen(3000);
    console.log("启动成功");