//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags:
 *       - test
 *   summary: 对无参方法进行测试
 *   description: 这个方法的文字描述
 *   responses:
 *     "200":
 *       description: 执行成功，会返回world。
 */
router.get('/hello', function (req, res) {
    res.send('world');
});

//最后部分：是把路由暴露给其它模块的代码
module.exports=router;