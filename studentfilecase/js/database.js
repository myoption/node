const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/student", { useNewUrlParser: true })
  .then(() => console.log("数据库连接成功"))
  .catch((err) => console.log(err, "数据库连接失败"));
//创建集合规则
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: {
    type: String,
    enum: ["男", "女"],
  },
  email: String,
  hobbies: [String],
  college: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
//
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
