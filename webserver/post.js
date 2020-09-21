const http = require("http");
//用于处理url地址

//web server
const app = http.createServer();
//处理参数请求模块
const querystring = require("querystring");

app.on("request", (req, res) => {
  //post 通过事件接收参数
  //data 请求参数传递时触发data事件
  //end 请求参数传递完成时触发end事件
  let postParams = "";
  req.on("data", (params) => {
    postParams += params;
  });
  req.on("end", () => {
    console.log(querystring.parse(postParams));
  });
  res.end("ok");
});
app.listen(3000);
