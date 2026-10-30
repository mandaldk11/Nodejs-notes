import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.query);
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "application/json" })


        // res.statusCode == 200;
        // res.setHeader("Content-Type" = "application/text")
        res.end("hello from server")
    } else if (req.url.toLowerCase() == "/about") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: "hello from about page" }))
    } else if (req.url.toLowerCase() == '/contact') {
        res.end("youi are in contact page")
    } else {
        res.end("you are wrong direction")
    }

})

const PORT = 3001 || process.env.PORT


server.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);

})