/* 
中间件应用
1.保护路由，先使用中间件判断登录状态
2.网站维护公告
3.自定义404页面 定义在最后
*/
const express = require("express");
const app = express();

app.use("/admin", (req, res, next) => {
    let isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.send("未登录");
    }
});
app.get("/admin", (req, res) => {
    res.send("您已登录 可以访问当前页面");
})
app.use((req, res, next) => {
    res.status(400).send("not found");
})
app.listen(3000);
console.log("启动成功");