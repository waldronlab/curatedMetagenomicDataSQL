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
 *               "BMI": "31.0"
 *               "age": "63"
 *               "tnm": "t1n0m0"
 *               "PMID": "25432777"
 *               "ajcc": "i"
 *               "fobt": "no"
 *               "gender": "male"
 *               "country": "FRA"
 *               "curator":
 *                 - "Paolo_Manghi"
 *               "disease":
 *                 - "CRC"
 *               "sampleID": "CCIS91228662ST-4-0"
 *               "body_site": "stool"
 *               "subjectID": "FR-275"
 *               "age_category": "adult"
 *               "number_bases": "8027807010"
 *               "number_reads": "94076829"
 *               "NCBI_accession":
 *                 - "ERR479389"
 *                 - "ERR479390"
 *                 - "ERR480885"
 *                 - "ERR480886"
 *               "disease_subtype": "carcinoma"
 *               "non_westernized": "no"
 *               "study_condition": "CRC"
 *               "DNA_extraction_kit": "Gnome"
 *               "median_read_length": "92"
 *               "minimum_read_length": "45"
 *               "sequencing_platform": "IlluminaHiSeq"
 *               "antibiotics_current_use": "NA"
 *       required: true
 *     responses:
 *       "200":
 *         description: 200 is the only code。Success or failure please check the member success of response body
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