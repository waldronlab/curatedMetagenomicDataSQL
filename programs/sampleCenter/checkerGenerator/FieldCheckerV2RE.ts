//字段检查器,第2版：根据正则表达式对值进行检验
import {FieldCheckerV1Required} from "./FieldCheckerV1Required";

export class FieldCheckerV2RE extends FieldCheckerV1Required {
    //列名
    private RE: RegExp;
    //构造函数
    constructor(colName: string, requiredness: boolean, RE: string) {
        super(colName, requiredness);
        this.RE = new RegExp(RE,"g");
    };
    //使用正则表达式去匹配输入的内容
    protected match(input:string):boolean{
        const result:RegExpExecArray=this.RE.exec(input);
        if (result==null){
            return false;
        }
        return (result.input==result[0]);
    }
}

if (module === require.main) {

}
