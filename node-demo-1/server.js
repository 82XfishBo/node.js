var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有请求传来！其路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(
        `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
              <meta charset="UTF-8">
              <link rel="stylesheet" href="/css">
              <title>AJAX</title>
              </head>

              <body>
                   <h1>大清已经亡啦，陛下！</h1>
                   <h3>现在是AJAX的天下</h3>
                   <script src="/main.js"></script>
              </body>
        </html>
        `)
        response.end()
    }
   else if(path === '/css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
      response.write(`h1
    {font-size:30px;color: red;}`)
    response.end()
    }
    else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
      response.write(`console.log("hi")`)
    response.end()
      }
    else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你访问的页面不存在！`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请点击打开网址： http://localhost:' + port)