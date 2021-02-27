//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags:
 *       - test
 *     summary: directly get output without input
 *     description: description of this method
 *     responses:
 *       "200":
 *         description: success ，then show 'world'。
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
 *     summary: echo
 *     description: Set input and get output
 *     parameters:
 *       - name: name
 *         description: user name
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: If the execution is successful, the parameters are obtained
 */
router.get('/echo', function (req, res) {
    let name=req.query.name;
    res.send('hello '+name);
});

/**
 * @swagger
 * /api/echo:
 *   post:
 *     tags:
 *       - test
 *     summary: echo
 *     description: Set input and get output
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               "整数": 8
 *               "字符串": "test"
 *               "数组":
 *                 - 1
 *                 - 2
 *                 - 3
 *     responses:
 *       "200":
 *         description: If the execution is successful, the parameters are obtained
 */
router.post('/echo', function (req, res) {
    res.send(req.body);
});



//最后部分：是把路由暴露给其它模块的代码
module.exports=router;