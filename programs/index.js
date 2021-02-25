"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const path = require("path");
const doc = require("swagger-jsdoc");
const ui = require("swagger-ui-express");
const app = express();
//1.引入模块化之后的路由序偶
const router = require("./router/hello");
const query = require("./router/query");
const append = require("./router/append");
//2.使用路由序偶(可以用来代替http请求处理程序)
app.use('/api', router);
app.use('/query', query);
app.use('/append', append);
//3.swagger的全局选项/工程选项
const swaggerOptions = {
    definition: {
        //OpenAPI的版本：我们使用最新的3.0版本
        openapi: '3.0.0'
        //其它显示给使用者的全局信息
        ,
        info: {
            //这套api的名字：万全
            title: "wanquan"
            //这套api的版本1.0.0
            ,
            version: '1.0.0',
            description: "这套api的描述"
        }
    }
    //这个就很重要了，它决定了从哪里提取api的规范信息
    ,
    apis: [path.join(__dirname, 'router/*.js')]
};
//4.使用文档(输入系统)生成内存中的数据对象规范
const spec = doc(swaggerOptions);
//5.根据规范生成网页界面
app.use("/api-docs", ui.serve, ui.setup(spec));
if (module === require.main) {
    http.createServer(app).listen(80);
}
//# sourceMappingURL=index.js.map