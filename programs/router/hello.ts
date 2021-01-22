//第一部分：所有路由都相同的头部
const express=require("express");
const router=express.Router();

//中间部分：才是路由自己的个性化部分
router.get('/', function (req, res) {
    res.send('hello');
})

//最后部分：是把路由暴露给其它模块的代码
module.exports=router;