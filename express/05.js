/* 
错误处理中间件
异步错误 需要在调用next（）时传递err参数 即可触发错误中间件
*/
const express = require("express");
const app = express();
const fa = require("fs");
app.get("/", (req, res,next) => {
    fa.readFile("./01.js", "utf8", (err, result) => {
        if (err) {
            next(err);
        } else {
            res.send("读取成功")
        }
    })
})
/* app.get("/index", (req, res) => { 
    //抛出错误 这是同步方法 无法捕获异步错误
   throw new Error("unkonw error");
}); */
app.use((err, req, res, next) => { 
    // console.log(err);
    res.status(500).send(err.message);
});
app.listen(3000);
console.log("启动成功");