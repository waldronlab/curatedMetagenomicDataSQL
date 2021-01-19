import {log} from "./log/logger";
const http=require("http");
const util=require("util");
const url=require("url");
const express=require("express");
const app=express();

app.use('/', function (req, res) {
    res.send('root path');
})

if (module===require.main){
    http.createServer(app).listen(3000);
    console.log("express的http服务程序");
}