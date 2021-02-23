import {tableBaseV2} from "./tableBaseV2";
import {tableBaseV1} from "./tableBaseV1";
import {DataTypes} from "sequelize";
export class tableBaseV3 extends tableBaseV2 {
    //返回字段列表:这个方法很重要，决定了创建出来的表到底有哪些列
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
}