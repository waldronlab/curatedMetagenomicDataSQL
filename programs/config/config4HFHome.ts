//何飞的办公室的配置，用于开发调试
import {ConfigBase, setCurrentConfig, defaultConfig}  from "./configBase";
import * as assert from "assert";

export class ConfigOfHFHome extends ConfigBase {
    public getStudiesDir(): string {
        return "E:\\万全\\甲方提供\\3.数据和模式\\inst\\curated";
    }
    //template.csv
    public getFieldDefineCSV(): string {
        return "E:\\万全\\甲方提供\\3.数据和模式\\inst\\extdata\\template.csv";
    }
}

//初始化
const current: ConfigBase = new ConfigOfHFHome();
if (current.checkEnv()) {
    setCurrentConfig(current);
}

//单元测试
if (module === require.main) {
    const c: ConfigBase = new ConfigOfHFHome()
    c.show4debug();
    if (c.checkEnv()) {
        console.log("这个配置文件符合当前环境");
    } else {
        console.log("这个配置文件不符合当前环境");
    }
    assert(defaultConfig === current);
}