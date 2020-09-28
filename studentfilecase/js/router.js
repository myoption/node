//引入router
const getRouter = require("router");
//获取路由对象
const router = getRouter();
//导入模板
const template = require("./template.js");

router.get("/list", (req, res) => {
  let html = template("list.art", {});
  res.end(html);
});
router.get("/add", (req, res) => {
  let html = template("add.art", {});
  res.end(html);
});

module.exports = router;
