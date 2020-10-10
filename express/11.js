/* 
express 路由参数
*/
const express = require("express");
const app = express();
//可以多参数
app.get("/find/:id", (req, res) => {
    // console.log(req.body);
    console.log(req.params)
    res.send("ok");
});
 
app.listen(3000);