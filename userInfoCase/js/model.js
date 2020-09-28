const mongoose = require("mongoose");
//创建数据库连接 27017 默认端口
mongoose
  .connect("mongodb://localhost/userinfo", { useNewUrlParser: true })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(() => {
    console.log("数据库连接失败");
  });
//创建集合rule
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 80,
  },
  password: String,
  email: String,
  //爱好 为数组 里面是字符串
  hobbies: [String],
});
//创建集合 得到集合构造函数
const User = mongoose.model("User", userSchema);
module.exports = User;
