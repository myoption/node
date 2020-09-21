//同步和异步区别
//同步可以从返回值取的数据
function getMsg() {
  setTimeout(function () {
    return {
      msg: " hello node.js",
    };
  }, 2000);
}
