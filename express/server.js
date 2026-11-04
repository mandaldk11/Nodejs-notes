const express = require('express');

const app = express()


app.get("/", (req, res) => {
    res.send("hello from express by dk sir and students")
})

app.get('/about', (req, res) => {
    res.send("welcome to about page")
})

app.get('/contactus', (req, res) => {
    res.send("contact us page")
})

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`your server is running at port ${PORT}`);

})