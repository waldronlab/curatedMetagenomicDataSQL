//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();

/**
 * @swagger
 * /query/last:
 *   get:
 *     tags:
 *       - query
 *     summary: directly get output without input
 *     description: description of this method
 *     responses:
 *       "200":
 *         description: success ，then show 'world'。
 */
router.get('/hello', function (req, res) {
    res.send('world');
});



//最后部分：是把路由暴露给其它模块的代码
module.exports=router;