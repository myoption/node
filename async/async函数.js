//对promise对象进行封装 将伊布代码写成同步形式 用async关键字
// 默认返回值是promise对象
//使用throw 抛出错误

//await promise对象  只能出现在异步函数中
//暂停异步函数的执行 等待promise对象返回结果后再向下执行
const fn1 = async () => {};
async function fn() {
  throw "发生错误";
  return 123;
}
fn()
  .then(function (data) {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function p1() {
  return "p1";
}
async function p2() {
  return "p2";
}
async function p3() {
  return "p3";
}
async function run() {
  let r1 = await p1();
  await p2();
  await p3();
  console.log(r1);
}
run();
