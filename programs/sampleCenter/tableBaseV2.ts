import {tableBaseV1} from "./tableBaseV1";
import {CreateTable, DefineTable} from "../SequelizeDB/tableCreator";
import {log} from "../log/logger";

require("../config/configDefault")
import {seq} from "../SequelizeDB/connect"
import {DataTypes, Op, fn, col} from "sequelize"

export class tableBaseV2 extends tableBaseV1 {
    //返回字段列表
    protected async getFields() {
        return {
            data: {
                //这是最重要的一列,数据类型为JSONB
                type: DataTypes.JSONB
                //这一列不允许为空
                , allowNull: false
            }
            //第1个用于去重的列
            , sampleID:
                {
                    //这是最重要的一列,数据类型为JSONB
                    type: DataTypes.STRING(8192)
                    //这一列不允许为空
                    , allowNull: false
                }
            //第2个用于去重的列
            , NCBI_accession:
                {
                    //这是最重要的一列,数据类型为JSONB
                    type: DataTypes.STRING(8192)
                    //这个不填则没事，但是主要填写了就不能重复
                    , allowNull: true
                }
        }
    }

    //插入一行
    public async insert(json: object) {
        if (this.check_input(json)) {
        }
    }

    //检验:我们同步完成
    protected check_input(json: object): boolean {
        let result: boolean = true;
        if (!json) {
            this.errorMsg = "被插入的数据不许为空!";
            return false;
        }
        if (result) {
            result = this.check_required(json);
        }
        return result;
    }

    errorMsg: string;

    //第一步:检查看看必须的字段是不是都有
    protected check_required(json: object): boolean {
        //以下是必须的属性列表
        const required =
            ["sampleID"
                , "subjectID"
                , "body_site"
                , "country"
                , "sequencing_platform"
                , "PMID"
                , "number_reads"
                , "number_bases"
                , "minimum_read_length"
                , "median_read_length"
                , "curator"];
        for (let i: number = 0; i < required.length; i++) {
            const fsName: string = required[i];
            if (!json.hasOwnProperty(fsName)) {
                this.errorMsg = "必要属性缺失:" + fsName;
                return false;
            }
        }
        return true;
    }
}


async function unitTest() {
    let obj: tableBaseV2 = new tableBaseV2();
    obj.tableName = "samples";
    obj.schema = "v1";
    let dt: any = await obj.createTable();
    if (dt) {
        obj.insert(null);
        console.log(obj.errorMsg);
    }
    return true;
}


if (module === require.main) {
    unitTest();
}