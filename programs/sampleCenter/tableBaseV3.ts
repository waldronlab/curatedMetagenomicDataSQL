import {tableBaseV2} from "./tableBaseV2";
import {tableBaseV1} from "./tableBaseV1";
import {DataTypes} from "sequelize";
import {log} from "../log/logger";
export class tableBaseV3 extends tableBaseV2 {
    //返回最近新加的样本
    public async last() {
        let dt=await this.defineTable();
        const result = await dt.findOne(
            {
                order: [
                    ['createdAt', 'DESC']
                ]
            }
        );
        return result;
    }
    //追加一个新的样本
    public async append(objJson){
        let dt=await this.defineTable();
        const result={code:200,text:"append success!"};
        //1.删除对结果存在干扰的属性
        delete objJson["id"];
        delete objJson["createdAt"];
        delete objJson["updatedAt"];
        //2.插入数据库
        if (!await this.insert(objJson)){
            log.error(this.errorMsg);
            result.code=400;
            result.text=this.errorMsg;
        }
        //3.返回结果
        return result;
    }
}