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

    response.statusCode = 200;
    const x = path === `/` ? `/index.html` : path;
    const index = x.lastIndexOf(`.`);
    const suffix = x.substring(index);
    const fileTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.jpg': 'image/jpeg',
        '.png':'image/png'
    }
    response.setHeader('Content-Type', `${fileTypes[suffix] ||`text/html`};charset=utf-8`)
    let content ; 
    try {
        content = fs.readFileSync(`./public${x}`);
    } catch (error) {
        content = '内容不存在';
        response.statusCode = 404;
    }
    response.write(content);
    response.end()
  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请点击打开网址： http://localhost:' + port)