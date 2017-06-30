var http=require("http");
var fs = require("fs");

http.createServer(function (req,res) {
    var url=req.url;

    switch (url){
        case "/index.html":fs.readFile("work/index.html","utf-8",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        case "/log.html":fs.readFile("work/log.html","utf-8",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        case "/home.html":fs.readFile("work/home.html","utf-8",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        case "/style.css":fs.readFile("work/style.css","utf-8",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        case "/javascript.js":fs.readFile("work/javascript.js","utf-8",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        case "/ku.jpg":fs.readFile("work/ku.jpg",function (err,data) {
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"image/jpeg;charset=utf8"})
                    res.end(data)
                }

            })
            break;
        default:
            fs.readFile("work/err.html","utf-8",function (err,data) {
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data);
                }
            })
    }
}).listen(3000)