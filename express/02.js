const express = require("express");
const app = express();

app.get("/request", (req, res,next) => {
    req.name = "zhang san";
    //调用next方法
    next();
})
app.get("/request", (req, res) => {
    res.send(req.name);
});
app.listen(3000);
console.log("启动成功");