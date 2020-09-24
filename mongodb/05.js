//mongoose 验证 在创建集合规则时，可以设置当前字段的验证规则，验证失败则插入失败
const mongoose = require("mongoose");
//连接数据库
mongoose
  .connect("mongodb://localhost/playround", { useNewUrlParser: true })
  .catch((err) => {
    console.log(err);
  });
//创建集合规则 验证规则
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "请输入文字标题"],
    minlength: [5, "标题长度不能小于5"],
    maxlength: 20,
    trim: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 70,
  },
  publisedDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    //枚举 列举当前字段所有可用的值
    enum: {
      values: ["html", "体育", "科技"],
      message: "当前分类不正确",
    },
  },
  author: {
    type: String,
    validate: {
      validator: (v) => {
        //返回布尔值
        return v && v.length > 4;
      },
      //自定义错误信息
      message: "传入的作者姓名不符合验证规则",
    },
  },
});
//创建集合
const Post = mongoose.model("Post", courseSchema);
//required:true 非空
Post.create({ title: "hello", category: "ddd", author: "zs" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    const error = err.errors;
    for (let attr in error) {
      console.log(error[attr]["message"]);
    }
  });
