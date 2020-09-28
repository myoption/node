const { log } = require("console");
//引入模块

const url = require("url");
const querystring = require("querystring");
const server = require("./init.js");
const User = require("./model.js");
/* User.create({
  name: "李四",
  age: 18,
  password: "123456",
  email: "745888@qq.com",
  hobbies: ["足球", "单车", "游泳"],
}); */
//为服务器对象添加请求事件
server.on("request", async (req, res) => {
  //请求方式
  const method = req.method;
  // console.log(method);
  //请求地址
  // console.log(req.url);
  //query 取得get请求中的参数 多处请求会用到
  const { pathname, query } = url.parse(req.url, true);
  // console.log(query);
  // console.log(pathname);
  if (method === "GET") {
    //返回列表查询
    if (pathname === "/list") {
      //查询用户信息
      let list = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
          .container {
      margin: 50px auto;
      width: 80%;
      height: 400px;
    }
    .container a {
      display: block;
      text-decoration: none;
      width: 80px;
      height: 40px;
      background-color: rgb(105, 97, 151);
      text-align: center;
      color: #fff;
      line-height: 40px;
    }
    .container .btn {
      display: inline-block;
      width: 40px;
    }
    .container .delete {
      background-color: red;
    }
    .container .modify {
      background-color: blueviolet;
    }
    .container table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    .container thead td {
      background-color: cadetblue;
    }
    .container td {
      width: 250px;
      text-align: center;
    }
        </style>
        </head>
        <body>
          <div class="container">
            <h4>
              <a class="addUser" target="blank" href="./addUser.html">添加用户</a>
            </h4>
            <table>
              <thead>
                <tr>
                  <td>姓名</td>
                  <td>爱好</td>
                  <td>年龄</td>
                  <td>邮箱</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>`;
      let users = await User.find();
      users.forEach((item) => {
        list += `<tr>
        <td>${item.name}</td>
        <td>${item.hobbies}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        <td><a href="./delete?id=${item._id}" class="btn delete">删除</a><a href="./modify.html?id=${item._id}" class="btn modify">修改</a></td>
        </tr>
        `;
      });
      list += `</tbody>
      </table>
    </div>
  </body>
</html>`;
      res.end(list);
    }
    if (pathname === "/addUser.html") {
      let list = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            div {
              width: 50%;
              margin: 0 auto;
              background-color: #999;
            }
          </style>
        </head>
        <body>
          <div>
            <form action="/addUser.html" method="post">
              <h3>添加用户</h3>
              <h5>用户名</h5>
              <input type="text" placeholder="请填写用户名" name="name" />
              <h5>密码</h5>
              <input type="password" placeholder="请填写密码" name="password" />
              <h5>年龄</h5>
              <input type="text" placeholder="请填写年龄" name="age" />
              <h5>邮箱</h5>
              <input type="text" placeholder="请填写邮箱" name="email" />
              <h5>请选择爱好</h5>
              <input
                type="checkbox"
                name="hobbies"
                id=""
                value="football"
              />足球<input
                type="checkbox"
                name="hobbies"
                id=""
                value="biking"
              />单车<input
                type="checkbox"
                name="hobbies"
                id=""
                value="traveling"
              />旅行
              <h3><button type="submit">提交</button></h3>
            </form>
          </div>
        </body>
      </html>
      `;
      res.end(list);
    }
    if (pathname === "/modify.html") {
      //取得get请求传递的参数
      let userId = query.id;
      let userInfo = await User.find({ _id: userId });
      // console.log(userInfo);
      let list = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            div {
              width: 50%;
              margin: 0 auto;
              background-color: #999;
            }
          </style>
        </head>
        <body>
          <div>
            <form action="./modify.html?id=${userId}" method="post">
              <h3>修改用户</h3>
              <h5>用户名</h5>
              <input type="text" placeholder="请填写用户名" name="name" value="${userInfo[0].name}"/>
              <h5>密码</h5>
              <input type="password" placeholder="请填写密码" name="password" value="${userInfo[0].password}"/>
              <h5>年龄</h5>
              <input type="text" placeholder="请填写年龄" name="age" value="${userInfo[0].age}"/>
              <h5>邮箱</h5>
              <input type="text" placeholder="请填写邮箱" name="email" value="${userInfo[0].email}"/>
              <h5>请选择爱好</h5>
             
      `;
      let hobbies = ["足球", "旅行", "单车"];
      //勾选之前的数据
      hobbies.forEach((item) => {
        let isHobby = userInfo[0].hobbies.includes(item);
        // console.log(isHobby);
        if (isHobby) {
          list += `
          <input
          type="checkbox"
          name="hobbies"
          id=""
          value="${item}"
          class="hobbies"
          checked
        />${item}
          `;
        } else {
          list += ` <input
          type="checkbox"
          name="hobbies"
          id=""
          value="${item}"
          class="hobbies"
        />${item}`;
        }
      });
      list += ` <h3><button type="submit">提交</button></h3>
      </form>
    </div>
  </body>
</html>`;
      res.end(list);
    }
    if (pathname === "/delete") {
      await User.deleteOne({ _id: query.id }).then((result) =>
        console.log(result, "删除成功")
      );
      res.writeHead(301, {
        Location: "/list",
      });
      res.end();
    }
  } else if (method === "POST") {
    //处理添加
    if (pathname === "/addUser.html") {
      //接收用户提交的信息
      let params = "";
      let userData = {};
      req.on("data", (param) => {
        params += param;
      });
      req.on("end", async () => {
        userData = querystring.parse(params);
        //将用户提交的信息 写入数据库
        User.create(userData);
        //重定向到list
        res.writeHead(301, {
          Location: "/list",
        });
        //结束请求 必须加
        res.end();
      });
    } else if (pathname === "/modify.html") {
      //处理修改
      //接收用户信息
      let params = "";
      let userData = {};
      req.on("data", (param) => {
        params += param;
      });
      req.on("end", async () => {
        userData = querystring.parse(params);
        //将用户提交的信息 写入数据库
        console.log(userData);
        await User.updateOne({ _id: query.id }, userData);
        //重定向到list 失败
        res.writeHead(301, {
          Location: "/list",
        });
      });
      // console.log(query.id);
      //结束请求 必须加
      res.end();
    }
  }
});
//监听端口
server.listen(3000);
