//全局配置基础
import * as fs from "fs";

export class ConfigBase {
    public getStudiesDir(): string {
        throw new Error("导入数据的目录必须设置");
    }

    //为了调试而显示信息
    public show4debug() {
        console.log("当前配置信息："+this.constructor.name);
        console.log("\t1.研究工程目录=" + this.getStudiesDir());
    };

    //检测运行环境是否满足当前配置
    public checkEnv(): boolean {
        var result: boolean = true;
        //先判断存放研究数据的目录是否存在
        if (result) {
            try
            {
                let stat = fs.statSync(this.getStudiesDir());
                result = stat.isDirectory();
            }
            catch {
                result=false;
            }
        }
        return result;
    };
}

//默认的配置
export var defaultConfig: ConfigBase = new ConfigBase();

export function setCurrentConfig(current: ConfigBase): void {
    defaultConfig = current;
}