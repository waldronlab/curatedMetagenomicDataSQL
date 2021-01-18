"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./log/logger");
const http = require("http");
const util = require("util");
const url = require("url");
if (module === require.main) {
    logger_1.log.info("xxxxxxxxxxxxxxxxxxxxxxxx");
    logger_1.log.fatal("fffffffffffffff");
    console.log("主程序测试");
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(util.inspect(url.parse(req.url, true)));
    }).listen(3000);
}
//# sourceMappingURL=index.js.map