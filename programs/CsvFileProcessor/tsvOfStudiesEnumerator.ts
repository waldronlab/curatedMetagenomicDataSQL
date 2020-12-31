//工程元数据信息定位测试
import {StudiesEnumerator} from "./studiesEnumerator";
import {log} from "../log/logger";
import * as path from "path";
import * as fs from "fs";

export class tsvOfStudiesEnumerator extends StudiesEnumerator {
    //这个方法用来处理工程/研究,目前只是简单的把它显示出来了而已
    protected async processProject(dir: string, name: string, index: number) {
        log.info(index);
        log.info(dir);
        log.info(name);
        log.info("--------------------------------------------------------------------------------")

        const metaDataFilePath = path.join(dir, name + "_metadata.tsv");
        try {
            const stat: fs.Stats = fs.statSync(metaDataFilePath);
            //不是文件则报错
            if (!stat.isFile()) {
                throw new Error("元数据文件缺失:" + metaDataFilePath);
            }

            ////
        } catch (error) {
            log.error("====================================================================================================");
            log.error("处理元数据文件异常");
            log.error(metaDataFilePath);
            log.error(error);
            return;
        }
    }
}

//单元测试
if (module === require.main) {
    const test: StudiesEnumerator = new tsvOfStudiesEnumerator();
    test.enumerate();
}