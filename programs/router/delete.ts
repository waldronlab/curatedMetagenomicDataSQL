//第一部分：所有路由都相同的头部
import express=require("express");
const router=express.Router();
import {tableBaseV3} from "../sampleCenter/tableBaseV3";

/**
 * @swagger
 * /delete/where:
 *   post:
 *     tags:
 *       - delete
 *     summary: Delete samples that meet the conditions
 *     requestBody:
 *       description: where conditions
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               "sampleID": "CCIS91228662ST-4-0test2"
 *         application/json/conditions_and:
 *           schema:
 *             type: object
 *             example:
 *               "sampleID": "CCIS91228662ST-4-0"
 *       required: true
 *     responses:
 *       "200":
 *         description: 200 is the only code。Success or failure please check member of response body
 */
router.post('/where', async function (req, res) {
    let obj: tableBaseV3 = new tableBaseV3();
    obj.tableName = "samples";
    obj.schema = "v1";
    var result:any=await obj.deleteSamples(req.body)
    res.writeHead(200, {'Content-Type': 'application/json'});
    const txt=JSON.stringify(obj.errorObject,["success","cause","message","errors","value","count"]);
    res.end(txt);
});



//最后部分：是把路由暴露给其它模块的代码
module.exports=router;