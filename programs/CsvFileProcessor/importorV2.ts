import {importorV1} from "./importorV1";
import {CreateTable} from "../SequelizeDB/tableCreator"
import {log} from "../log/logger";
import {StudiesEnumerator} from "./studiesEnumerator";

//导入器
export class importorV2 extends importorV1 {
    //目前这个导入器实现了研究名称的入库
    tableCreated: boolean;

    constructor() {
        super();
        this.tableCreated = false;
    }

    studies: any;

    protected async saveStudy(studyName:string) {
        if (!this.tableCreated) {
            this.tableCreated=true;
            this.studies = await CreateTable("studies", ["studyName"]);
        }
        this.studies.create({studyName:studyName});
    }

    //这个方法用来预检研究/工程对应的tsv文件是否存在
    protected async processProject(dir: string, name: string, index: number) {
        await super.processProject(dir,name,index);
        await this.saveStudy(name);
    }
}

//单元测试
if (module === require.main) {
    const test: StudiesEnumerator = new importorV2();
    test.enumerate();
}