import * as fs from "fs";
import * as path from "path";
import {Model, DataTypes, Sequelize} from "sequelize";
import {Study} from "../seqdb/models/Study"
import {Variable} from "../seqdb/models/Variable";


//工程元数据处理器
export class ProjectMetaProcess {
    private projectRootDir: string;
    private name: string;
    private studyInDB: any;
    private sampleInDBofCurrentLine: any;
    private colsInvariable: any[];
    //列数
    private colCountFromHead: number;  //从首行提取出来的列数
    private culCountFromCurrentLine: number;  //当前数据行提取出来的列数:用于和上面的列数比较，发现错误
    private colCountNeedProcess: number; //计划处理的列数，为了调试程序提速专用


    constructor(projectRootDir, name) {
        this.projectRootDir = projectRootDir;
        this.name = name;
    }

    //根据成员变量的状态，对工程进行处理
    public async process() {
        var metaDataFilePath = path.join(this.projectRootDir, this.name + "_metadata.tsv");
        try {
            var stat: fs.Stats = fs.statSync(metaDataFilePath);
            //不是文件则报错
            if (!stat.isFile()) {
                console.log("====================================================================================================");
                console.log("元数据文件缺失");
                console.log(metaDataFilePath);
                return;
            }
            //添加到数据库
            this.studyInDB = await Study.create({study_name: this.name});
            //console.log(study);
            //处理对应的tsv文件
            await this.processTSVFile(metaDataFilePath);
        } catch (error) {
            console.log("====================================================================================================");
            console.log("处理元数据文件异常");
            console.log(metaDataFilePath);
            console.log(error);
            return;
        }
    }

    //处理元数据文件
    protected async processTSVFile(filePath: string) {
        var allTxt: string = fs.readFileSync(filePath).toString();
        var lines: string[] = allTxt.split("\n");
        var header: string = lines[0];
        await this.processHeader(header);
        for (var lineIndex: number = 1; lineIndex < lines.length; lineIndex++) {
            await this.processDataLine(lineIndex, lines[lineIndex]);
        }
    }

    protected async processHeader(header: string) {
        //1.去掉两端空白
        header = header.trim();
        var fields: string[] = header.split("\t");
        this.colCountFromHead = fields.length;
        this.colCountNeedProcess = this.colCountFromHead;
        //为了调试提速，我们只处理前面3列即可(发行后注释掉下面的一行)
        //this.colCountNeedProcess  = Math.min(this.colCountFromHead, 3);
        console.log(header);
        console.log("列数:" + fields.length);
        this.colsInvariable = [];
        for (var index: number = 0; index < this.colCountNeedProcess; index++) {
            var data = {
                name: fields[index],
                //字段的类型：目前都只做字符串处理
                type: "s",
                sourceForDebugOnly: this.name
            };
            var col = await Variable.create(data);
            //await col.save();
            var pos = this.colsInvariable.push(col);
            console.log(pos);
        }
    };

    //处理数据行
    protected async processDataLine(lineIndex: number, dataLine: string) {
        if (dataLine.length < 1) {
            return;
        }
        //3.判断列数是否一致
        var fields: string[] = dataLine.split("\t");
        this.culCountFromCurrentLine = fields.length;
        if (this.culCountFromCurrentLine != this.colCountFromHead) {
            console.log("数据列数和文件头不一致");
        }
        ;
        //4.因为每一行都是一个样本，所以既然是处理一个新行，必然应该先增加一个样本
        this.sampleInDBofCurrentLine = await this.studyInDB.createSample();
        this.sampleInDBofCurrentLine.sample_id = fields[0];
        await this.sampleInDBofCurrentLine.save();

        //5.保存字段
        for (var index: number = 0; index < this.colCountNeedProcess; index++) {
            this.saveFieldValue(this.colsInvariable[index],this.sampleInDBofCurrentLine.id,fields[index]);
        }
    }

    //保存字段值
    private async saveFieldValue(fieldType: any, SampleID: string, value: string) {
        //根据字段类型创建一个字段值
        var fieldValue: any = await fieldType.createSample_Variable();
        //var fieldValue: any = await fieldType.addSample_Variable();
        //设置字段所属的样本
        fieldValue.SampleId = SampleID;
        //保存字段的值(目前暂时保存到字符串中)
        fieldValue.str_val = value;
        //最终保存字段值到数据库
        fieldValue.save();
    }
}