//这是CSV文件处理程序
import {TxtLinesProcessor} from "./TxtLinesProcessor";
import {TxtFileProcessor} from "./TxtFileProcessor";
import {defaultConfig} from "../config/configBase";
import {log} from "../log/logger"

export class CsvFileProcessor extends TxtLinesProcessor {
    //字段之间的分隔符
    private readonly fieldSplitter: string;

    //构造函数
    constructor(txtFilePath: string, splitter: string) {
        super(txtFilePath);
        this.fieldSplitter = splitter;
    };

    //文本行处理函数
    protected processLine(lineContent: string, lineIndex: number, lineCount: number): boolean {
        let result: boolean = true;
        //对于CSV文件而言，空行是结束标志
        if (lineContent.length<1){
            return false;
        }
        //使用字段分隔符，分隔出各个列来
        let columns: string[] = lineContent.split(this.fieldSplitter);
        //循环处理各个列
        for (let columnIndex: number = 0; columnIndex < columns.length; columnIndex++) {
            result = result && this.processFieldValue(columns[columnIndex], columnIndex, columns.length, lineIndex, lineCount);
        }
        return result;
    }

    //处理字段值
    protected processFieldValue(fieldValue: string, columnIndex: number, columnCount: number, lineIndex: number, lineCount: number) {
        log.log("行:"+lineIndex+"/"+lineCount);
        log.log("列:"+columnIndex+"/"+columnCount);
        log.log("值:"+fieldValue);
        return true;
    }
}

//单元测试代码
if (module===require.main){
    let obj:TxtFileProcessor=new CsvFileProcessor(defaultConfig.getFieldDefineCSV(),",");
    obj.process();
}