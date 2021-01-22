const http=require("http");
const express=require("express");
const app=express();

//1.引入模块化之后的路由序偶
const router=require("./router/hello")

//2.使用路由序偶(可以用来代替http请求处理程序)
app.use('/', router);

if (module===require.main){
    http.createServer(app).listen(3000);
}