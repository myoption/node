/* 
异步函数错误捕获
try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误 但是不能捕获其他类型的API发生的错误

*/
app.get("/", async (req, res, next) => {
    try {
        await User.find({ name: "张三" });
    } catch (err) {
        next(err);
    }
});