import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.send("hello from server")
})

app.get('/about/:name/:id', (req, res) => {
    const { name, id } = req.params;

    res.send(`welcom mr/mrs ${name} your id is ${id}`)
})

app.get('/search', (req, res) => {
    const data = req.query.name
    res.send(`you are searching for ${data}`)
})


const PORT = 5001 || 3001;

app.listen(PORT, () => {
    console.log(`your server is running at port ${PORT}`);

})