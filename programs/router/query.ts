//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();
import {tableBaseV3} from "../sampleCenter/tableBaseV3";

/**
 * @swagger
 * /query/last:
 *   get:
 *     tags:
 *       - query
 *     summary: directly get last sample without input
 *     produces:
 *     - application/json
 *     description: get last inserted sample
 *     responses:
 *       "200":
 *         description: success ，last inserted sample。
 *       "404":
 *         description: not found last sample, number of samples is zero。
 */
router.get('/last', async function (req, res) {
    let obj: tableBaseV3 = new tableBaseV3();
    obj.tableName = "samples";
    obj.schema = "v1";
    var objJson:any=await obj.last();

    if (objJson==null)
    {
        res.status(404)
        res.send("not found!")
    }
    else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        objJson=JSON.stringify(objJson.data);
        res.end(objJson);
    }
});



//最后部分：是把路由暴露给其它模块的代码
module.exports=router;