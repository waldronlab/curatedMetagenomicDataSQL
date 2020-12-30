//何飞的办公室的配置，用于开发调试
import {ConfigBase,setCurrentConfig,defaultConfig} from "./configDefault";
import * as assert from "assert";

export class ConfigOfHefeiOffice extends ConfigBase {
    public getStudiesDir(): string {
        return "G:\\git代码仓库大全\\data4import\\inst\\curated";
    }
}

var Current:any=ConfigOfHefeiOffice;

//初始化
let current: ConfigBase = new Current();
if (current.checkEnv()) {
    setCurrentConfig(current);
}

//单元测试
if (module===require.main){
    const c:ConfigBase=new Current()
    c.show4debug();
    if (c.checkEnv()){
        console.log("这个配置文件符合当前环境");
    }
    else
    {
        console.log("这个配置文件不符合当前环境");
    }
    assert(defaultConfig===current);
}