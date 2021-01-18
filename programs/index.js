"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const util = require("util");
const url = require("url");
if (module === require.main) {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(util.inspect(url.parse(req.url, true)));
    }).listen(3000);
    console.log("最简单的http服务程序");
}
//# sourceMappingURL=index.js.map