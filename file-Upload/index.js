import 'dotenv/config'
import express from 'express'
import multer from 'multer';
const app = express();
const PORT = 5001 || process.env.PORT
    //  step-01-multer Storage-
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + file.originalname)
    }
})

// step-02-upload
const upload = multer({
        storage,
        limits: { fileSize: 1024000 } //1 mb 
    })
    // middleware-
app.use(express.json());
// step-03-
app.use(upload.single('image')) //image is the name of our field



// home Routes-
app.get('/', (req, res) => {
    res.send("hello from home page")
})

app.post('/file-uploads', (req, res) => {
    //file handling
    console.log(req.file)
    return res.json({ success: true, message: "file uploaded successfully..." })

})

// listening the port

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);

})