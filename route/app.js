//1.引入系统模块http
const http = require("http");
//2.创建网站服务器
const app = http.createServer();
//3.为网站服务器添加请求事件
//4.实现路由功能
//获取客户端请求方式 地址
const url = require("url");

app.on("request", (req, res) => {
  //获取请求方式
  const method = req.method.toLowerCase();
  //获取请求地址
  const pathname = url.parse(req.url).pathname;
  //设置字符显示
  res.writeHead(200, { "content-type": "text/html;charset=utf8" });
  if (method === "get") {
    if (pathname === "/" || pathname === "/index") {
      res.end("<h2>欢迎来到首页</h2>");
    } else if (pathname === "/list") {
      res.end("welcome to list");
    } else {
      res.end("您访问的页面不存在！");
    }
  } else if (method === "post") {
  }
});
app.listen(3000);
console.log("服务器启动成功");
