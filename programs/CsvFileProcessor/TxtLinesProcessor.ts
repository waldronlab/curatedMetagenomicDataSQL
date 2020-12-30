//这是一个多行文本文件处理程序
import {TxtFileProcessor} from "./TxtFileProcessor";
import {defaultConfig} from "../config/configBase";

export class TxtLinesProcessor extends TxtFileProcessor {


    //模板函数
    protected processFileContent(allTxt: string): boolean {
        const lines: string[] = allTxt.split("\n");
        let result:boolean=true;
        for (let lineIndex: number = 1; lineIndex < lines.length; lineIndex++) {
            result=result && this.processLine(lines[lineIndex],lineIndex,lines.length);
        }
        return result;
    }

    //文本行处理函数
    protected processLine(lineContent: string,lineIndex: number,lineCount:number): boolean {
        console.log("第"+lineIndex+"行:");
        console.log(lineContent);
        return true;
    }
}

//单元测试代码
if (module===require.main){
    let obj:TxtFileProcessor=new TxtLinesProcessor(defaultConfig.getFieldDefineCSV());
    obj.process();
}