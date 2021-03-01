import {tableBaseV2} from "./tableBaseV2";
import {tableBaseV1} from "./tableBaseV1";
import {DataTypes} from "sequelize";
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
    //追加
}