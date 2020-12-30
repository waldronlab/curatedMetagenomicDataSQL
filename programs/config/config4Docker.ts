import {ConfigBase, defaultConfig, setCurrentConfig} from "./configDefault"
import * as assert from "assert";

//docker内运行的配置，用于发布产品
export class ConfigOfDocker extends ConfigBase {
    public getStudiesDir(): string {
        return "/data/4import/inst/curated";
    }
}

//初始化
const current: ConfigBase = new ConfigOfDocker();
if (current.checkEnv()) {
    setCurrentConfig(current);
}

//单元测试
if (module === require.main) {
    const c: ConfigBase = new ConfigOfDocker()
    c.show4debug();
    if (c.checkEnv()) {
        console.log("这个配置文件符合当前环境");
    } else {
        console.log("这个配置文件不符合当前环境");
    }
    assert(defaultConfig === current);
}