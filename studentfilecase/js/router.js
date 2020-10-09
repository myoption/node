//引入router
const getRouter = require("router");
const query = require("querystring");
const Student = require("./database.js");
//获取路由对象
const router = getRouter();
//导入模板
const template = require("./template.js");

router.get("/list", async (req, res) => {
  let info = await Student.find();
  console.log(info);
  let html = template("list.art", { student: info });
  res.end(html);
});
router.get("/add", (req, res) => {
  let html = template("add.art", {});
  res.end(html);
});

router.post("/add", (req, res) => {
  //接收post请求的参数
  let postData = "";
  req.on("data", (param) => {
    postData += param;
  });
  req.on("end", () => {
    let info = query.parse(postData);
    Student.create(info);
    // res.writeHead(301, { Location: "/list" });
    //需要在end 事件内结束请求
    res.writeHead(301, { Location: "/list" });
    res.end();
  });
});

module.exports = router;
