const http = require("http");
//用于处理url地址
const url = require("url");
//web server
const app = http.createServer();

app.on("request", (req, res) => {
  //post 通过事件接收参数
  //data 请求参数传递时触发data事件
  //end 请求参数传递完成时触发end事件
  // let postParams = "";
  // req.on("data", (params) => {
  //   postParams += params;
  // });
  // req.on("end", () => {});
  // res.end("ok");
  // 获取请求地址;
  // console.log(req.url);
  //响应报文 http状态码
  res.writeHead(200, {
    "content-type": "text/html;charset=utf8",
  });
  //get 请求参数 url ，true 将查询参数解析为对象
  // console.log(url.parse(req.url, true));
  let { query, pathname } = url.parse(req.url, true);
  // console.log(query.name);
  //不输入也返回首页
  if (pathname == "/index" || pathname == "/") {
    res.end("<h2>欢迎e</h2>");
  } else if (pathname == "/list") {
    res.end("list");
  } else {
    res.end("not found");
    //响应报文 http状态码
    res.writeHead(404, {
      "content-type": "text/html",
    });
  }
  if (req.method == "POST") {
    res.end("post");
  } else if (req.method == "GET") {
    res.end("get");
  }
  //获取请求报文 req.headers
  // console.log(req.headers);
  //响应报文 http状态码
});
app.listen(3000);
