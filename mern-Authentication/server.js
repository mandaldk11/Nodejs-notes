import 'dotenv/config'
import express from 'express'
import userRouter from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 8001
    // middleware-
app.use(express.json())
    // path/routes-
app.get('/', (req, res) => {
    res.send("welcome to home")
})

app.use("/api/v1/user", userRouter)



app.listen(PORT, () => {
    console.log(`your server is running at port ${PORT}`);

})