import 'dotenv/config'
import express from 'express';
const app = express();
//step-01- set template engine-

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001


//home-route

app.get('/', (req, res) => {
    res.send("welcome to server")
})

app.get('/home', (req, res) => {
    const data = { username: "rahul", age: 25, email: "rahul@gmail.com", isLogedIn: true }
    const names = ["sayli", "vishal", "Tinku"]
    res.render('home', { data, names })
})

//listen

app.listen(PORT, () => {
    console.log(`your server is running at port ${PORT}`);

})