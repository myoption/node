
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
function fn() {
    return function (req,res,next) {
        console.log(req.method);
        next();
    }
}
app.use(fn());



app.get("/", (req, res) => {
    // console.log(req.body);
    res.send("ok");
 });
app.listen(3000);