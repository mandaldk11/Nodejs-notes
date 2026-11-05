import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.send("hello from server")
})

app.post('/submit', (req, res) => {
    res.send('hello from post request request recieve')
})

app.put('/update', (req, res) => {
    res.send('update or put req recieve')
})

app.patch('/modify', (req, res) => {
    res.send('patch req recieve')
})

app.delete('/terminate', (req, res) => {
    res.send('delete req recieve')
})




const PORT = 5001 || 3001;

app.listen(PORT, () => {
    console.log(`your server is running at port ${PORT}`);

})