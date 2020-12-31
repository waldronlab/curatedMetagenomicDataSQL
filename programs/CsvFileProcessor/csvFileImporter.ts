import {CsvFileProcessor} from "./CsvFileProcessor";
import {log} from "../log/logger";
import {CreateTable} from "../SequelizeDB/tableCreator"

export class csvFileImporter extends CsvFileProcessor {
    readonly tableName: string;
    private tableInDB: any;
    private fieldNames:string[];
    constructor(csvFilePath: string, fieldSplitter: string, tableName: string) {
        super(csvFilePath, fieldSplitter);
        this.tableName = tableName;
    }

    //文本行处理函数
    protected async processLine(lineContent: string, lineIndex: number, lineCount: number) {
        let result: boolean = true;
        //对于CSV文件而言，空行是结束标志
        if (lineContent.length < 1) {
            return false;
        }
        //使用字段分隔符，分隔出各个列来
        let columns: string[] = this.splitToArray(lineContent);
        if (lineIndex == 0) {
            this.fieldNames=columns;
            this.tableInDB = await CreateTable(this.tableName, columns);
        } else {
            //循环处理各个列
            var jsonString="{";
            for (let columnIndex: number = 0; columnIndex < columns.length; columnIndex++) {
                jsonString=jsonString+this.fieldNames[columnIndex];
                jsonString=jsonString+"";
                jsonString=jsonString+":\"";
                result = result && await this.processFieldValue(columns[columnIndex], columnIndex, columns.length, lineIndex, lineCount);
            }
        }
        return result;
    }
}