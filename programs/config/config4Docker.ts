import {ConfigBase, defaultConfig, setCurrentConfig} from "./configDefault"
import * as assert from "assert";

//docker内运行的配置，用于发布产品
export class ConfigOfDocker extends ConfigBase{
    private studiesDir:string="/data/4import/inst/curated";
    public getStudiesDir():string{
        return this.studiesDir;
    }
}

var Current:any=ConfigOfDocker;

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