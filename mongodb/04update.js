//查询文档 条件为空查找所有文档 返回文档集合
//Course.find().then()
//链接数据库
const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://localhost/playround", { useNewUrlParser: true })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
//先创建集合规则 再创建集合
const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  age: Number,
});
const Count = mongoose.model("Count", courseSchema);
const count = new Count({
  name: "王五",
  author: "heima",
  isPublished: true,
  age: 21,
});
//updateOne({查询条件},{要修改的值})
/* Count.update({ age: { $gt: 20 } }, { age: 30 }).then((result) =>
  console.log(result)
); */
//updateMany({查询条件},{要修改的值})
