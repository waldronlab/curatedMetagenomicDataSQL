//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags:
 *       - test
 *     summary: 方法的最简描述
 *     description: 方法的完整描述
 *     responses:
 *       "200":
 *         description: 执行成功，会返回world。
 */
router.get('/hello', function (req, res) {
    res.send('world');
});

/**
 * @swagger
 * /api/echo:
 *   get:
 *     tags:
 *       - test
 *     summary: 给啥就返回啥
 *     description: 用来测试数据的传递
 *     parameters:
 *       - name: name
 *         description: 人名
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: 执行成功，会返回提供的参数
 */
router.get('/echo', function (req, res) {
    let name=req.query.name;
    res.send('hello '+name);
});


//最后部分：是把路由暴露给其它模块的代码
module.exports=router;