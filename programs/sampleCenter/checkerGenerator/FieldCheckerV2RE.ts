//字段检查器,第2版：根据正则表达式对值进行检验
import {FieldCheckerV1Required} from "./FieldCheckerV1Required";

export class FieldCheckerV2RE extends FieldCheckerV1Required {
    //列名
    private RE: RegExp;

    //构造函数
    constructor(colName: string, requiredness: boolean, RE: string) {
        super(colName, requiredness);
        this.RE = new RegExp(RE, "g");
    };

    //使用正则表达式去匹配输入的内容
    //成功通过函数返回,失败通过异常返回原因
    protected match(input: string): void {
        const mr: RegExpExecArray = this.RE.exec(input);
        let result: boolean = (mr != null);
        if (result) {
            result = (mr.input == mr[0]);
        }
        if (!result) {
            throw new Error(this.colName + ":" + input + "不匹配" + this.RE);
        }
    }
}

if (module === require.main) {

}
