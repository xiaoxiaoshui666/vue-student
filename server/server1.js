//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// JSON格式请求
app.all('/student', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*')
    const data = [
        {
            "id": "001",
            "name": "tom",
            "age": "18"
        },
        {
            "id": "002",
            "name": "jerry",
            "age": "19"
        },
        {
            "id": "003",
            "name": "tony",
            "age": "120"
        }
    ]
    // 想把这个 data对象 传给 json.html文件中   send()方法里面可以接受字符串不能接受对象
    // 所以这里需要对这个对象进行字符串的转换
    let str = JSON.stringify(data);   // 利用JSON的stringify()方法转换为JSON格式字符串
    response.send(str);
});


//4. 监听端口启动服务
app.listen(5001, () => {
    console.log("学生服务器已经启动, 5001 端口监听中....");
});
