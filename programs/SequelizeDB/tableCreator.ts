//表控制器:主要用来导入CSV文件中的数据
require("../config/configDefault")

import {seq} from "./connect"

import {DataTypes} from "sequelize"

async function CreateTable(tableName: string, fieldsName: string[]) {
    //ft是字段类型的缩写
    let ft=DataTypes.STRING;
    //fs是fields的缩写
    let fs:any="fs={";
    for (let index:number=0;index<fieldsName.length;index++)
    {
        fs=fs+fieldsName[index]+":ft,"
    }
    if (fieldsName.length>0)
    {
        fs=fs.substr(0,fs.length-1);
    }
    fs=fs+"}";
    eval(fs);
    let result:any=seq.define(tableName, fs, {tableName: tableName});
    //根据测试发现，其它名字的表不会收到破坏,及时使用seq.sync({force: true}也是不会破坏
    await result.sync({force: true});
    return result;
}

async function unitTest(){
    for (let t:number=1;t<3;t++)
    {
        let fs:Array<string>=[];
        for (let c=1;c<1598;c++){
            fs.push("f"+c);
        }
        let tmp=await CreateTable("test"+t, fs);
        //尝试插入数据
        tmp.create({f1:'xxx',f2:'yyy',f3:'zzz'});
    }
}


if (module === require.main) {
    //曾经得到过异常:(node:10544) UnhandledPromiseRejectionWarning: SequelizeDatabaseError: tables can have at most 1600 columns
    console.log("表最多1600列,注意因为还有些自动添加的列");
    unitTest();
}