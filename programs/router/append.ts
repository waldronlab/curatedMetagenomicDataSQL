//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();
import {tableBaseV3} from "../sampleCenter/tableBaseV3";

/**
 * @swagger
 *   /append/new:
 *   post:
 *     tags:
 *       - append
 *     summary: directly append as last sample
 *     requestBody:
 *       description: Pet object that needs to be added to the store
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               petId: 6
 *               quantity: 1
 *               id: 0
 *               shipDate: 2000-0
 *               complete: false
 *               status: placed
 *       required: true
 *     responses:
 *       "200":
 *         description: success ，last inserted sample。
 */
router.post('/new', async function (req, res) {
    let obj: tableBaseV3 = new tableBaseV3();
    obj.tableName = "samples";
    obj.schema = "v1";
    var objJson:any=await obj.last();
    res.writeHead(200, {'Content-Type': 'application/json'});
    objJson=JSON.stringify(objJson.data);
    res.end(objJson);
});



//最后部分：是把路由暴露给其它模块的代码
module.exports=router;