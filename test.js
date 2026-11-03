import http from 'http'
import path from 'path';
import url from 'url'


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const parsedObject = parsedUrl.query;
    console.log(parsedObject.search);

    res.end("hello from server")
})

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`your server is running at port no ${PORT}`);

})