//查询文档 条件为空查找所有文档 返回文档集合
//Course.find().then()
//链接数据库
const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://localhost/playround", { useNewUrlParser: true })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
//先创建集合规则 再创建集合
const courseSchema = new mongoose.Schema({
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
// count.save();
//db.count.insert({ name: "李四", author: "heima", isPublished: true, age: 21 });
//查询
/* Course.find({ _id: "5f6b5f0678f07c2f40a0d690" }).then((result) =>
  console.log(result)
); */
//.findOne().then() 默认返回当前集合第一条
//条件匹配 20<age <50
//Count.find({ age: { $gt: 20, $lt: 50 } }).then((result) => console.log(result));
//匹配包含
//Count.find({ age: { $in: [20] } }).then((result) => console.log(result));
//选择字段
/* Count.find()
  .select("age")
  .then((result) => console.log(result)); */
/* 返回结果  
 { _id: 5f6bf955125b96359c30988f, age: 51 },
    { _id: 5f6bf9778ad0e80ec83a0f03, age: 21 }
 */
//sort 排序 默认升序
/* Count.find()
  .sort("age")
  .then((result) => console.log(result)); */
//sort 排序 降序排列 -
/* Count.find()
  .sort("-age")
  .then((result) => console.log(result)); */
// ship 跳过n条数据  limit限制查询数量
/* Count.find()
  .skip(2)
  .limit(1)
  .then((result) => console.log(result)); */
//delete
//findOneAndDelete() 删除一个
// Count.findOneAndDelete().then((result) => console.log(result));
//删除多个
// Count.deleteMany().then((result) => console.log(result));
