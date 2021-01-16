let RE:any = new RegExp("stool|skin|vagina|oralcavity|nasalcavity|lung|milk", "g");
const mr: RegExpExecArray = RE.exec("stool");
let result: boolean = (mr != null);
if (result) {
    result = (mr.input == mr[0]);
}
if (!result) {
    throw new Error(this.colName + ":" + "stool" + "不匹配" + RE);
}