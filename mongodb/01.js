const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playround", { useNewUrlParser: true })
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log(err));
//创建集合 1是对集合设定规则 2是创建集合 mongoose.Schema 构造函数的实例即可创建集合
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
});
//创建集合 使用之前的规则
const Course = mongoose.model("Course", courseSchema);

//(创建文档) 使用之前创建的集合
const course = new Course({
  name: "nodejs",
  author: "heima",
  isPublished: true,
});
//插入数据
// course.save();

//集合调用.creat 方法 异步API
// Course.create(
//   {
//     name: "javaScript",
//     author: "heima",
//     isPublished: true,
//   },
//   (err, result) => {
//     console.log(err);
//     console.log(result);
//   }
// );
Course.create({
  name: "promise",
  author: "heima",
  isPublished: true,
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
