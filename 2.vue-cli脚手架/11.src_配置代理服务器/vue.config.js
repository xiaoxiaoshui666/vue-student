module.exports = {
    lintOnSave: false,   // 关闭语法检查

    // 开启代理服务器

    // 方式 1. proxy为字符串型的
    /* devServer: {
        proxy: 'http://localhost:5001'  // 不要加斜杠等后缀  5001告诉代理服务器一会要把请求转发给谁
    } */

    // 方式 2. proxy为对象型的
    devServer: {
        proxy: {
            '/demostudent': {   // 如果本机请求的后缀是/demostudent 就把请求转发给5001后端服务器
                target: 'http://localhost:5001',
                // pathRewrite重写路径，不写正则匹配条件就在后端服务器的 /demostudent/syudent下的路径找文件
                pathRewrite: { '^/demostudent': '' }, // 正则 匹配所有以demostudent开头的路径 把 demostudent 转化为 ''
                ws: true,  // 用于支持websocket 默认为true
                changOrigin: true // 用于控制本地到代理服务器请求的请求头中的host值 默认为true
            },
            '/democars': {
                target: 'http://localhost:5002',
                pathRewrite: { '^/democars': '' },
                ws: true,
                changOrigin: true
            },
        }
    }
}