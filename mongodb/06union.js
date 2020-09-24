//不同集合之间的数据存在关联
// {_id title author content} {_id name age hobbies}
//使用id
//mongoose 验证 在创建集合规则时，可以设置当前字段的验证规则，验证失败则插入失败
const mongoose = require("mongoose");
//连接数据库
mongoose
  .connect("mongodb://localhost/playround", { useNewUrlParser: true })
  .catch((err) => {
    console.log(err);
  });

//作者集合
const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
  })
);
//文章集合
const Artical = mongoose.model(
  "Artical",
  new mongoose.Schema({
    title: {
      type: String,
    },
    //使用ID将文章和作者进行关联
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  })
);
//插入数据
/* Author.create({ name: "李白" }).then((result) => {
  console.log(result);
}); */
/* Artical.create({ title: "将进酒", author: "5f6c3ac3614d0e1b50055187" }).then(
  (result) => {
    console.log(result);
  }
); */
//联合查询
Artical.find()
  .populate("author")
  .then((err, result) => {
    console.log(result);
    console.log(err);
  });
