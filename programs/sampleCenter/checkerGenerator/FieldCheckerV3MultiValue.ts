import {FieldCheckerV2RE} from "./FieldCheckerV2RE";

export class FieldCheckerV3MultiValue extends FieldCheckerV2RE{
    //列名
    private multiValue:boolean;
    //构造函数
    constructor(colName: string, requiredness: boolean, RE: string,multiValue:boolean) {
        super(colName, requiredness,RE);
        this.multiValue=multiValue;
    };

    //对合法性进行检查
    public check(json: object):boolean {
        //1.先检查必要性
        let result:boolean=super.check(json);
        if (!result){
            //没有通过检查，则直接以失败为结果进行返回
            return result;
        }
        //2.如果有值，则需要对值进行检测
        if (!json.hasOwnProperty(this.colName)) {
            //如果这一列不是不要的，并且这一列还根本不存在,那么就直接以通过检测为结果进行返回
            return true;
        }
        //3.否则，就得对这一列的值进行检测
        //3.1.提取出值来
        let value=json[this.colName];
        //3.2.判空
        if (!value){
            throw new Error(this.colName+"存在，但是内容为null，这种情况甲方如何应对甲方未做要求!");
            return false;
        }
        if(!this.multiValue){
            //若为单值，则直接对值进行匹配
            return this.match(value);
        }
        else
        {
            //若为多值，则需要逐个元素进行匹配
            for(let index:number=0;index<value.length;index++){
                const element=value[index];
                if (!this.match(element)){
                    throw new Error(this.colName+"内容不满足要求");
                    return false;
                }
            }
        }
        return result;
    }
}