// 1) fs module in  node js- CRUD
// -------------------------------------------

import fs from 'fs'

//write file synchronously-
// 1) create

fs.writeFileSync('test.txt', ' node js from dk sir')

// Async file creation --
fs.writeFile('./demo.txt', 'hello from async fn', (err) => {
    console.log(err);

})


// 2)READ-
// synchoronous

const result = fs.readFileSync('./demo.txt', "utf-8");
console.log(result);


// Async 
fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err) {
        log(err)
    }
    console.log(data);

})

// 3 append in fs-udate

fs.appendFileSync('demo.txt', "dk is back \n");

//copy file sync

fs.cpSync('test.txt', 'copy.txt')

//Delete or unlink sync-

fs.unlinkSync('copy.txt')

//how to create dir -

fs.mkdirSync("my-docs/a/b", { recursive: true });

//delete folder-

fs.rm('./my-folder', { recursive: true, force: true }, (err) => {
    if (err) {
        console.error('Error deleting folder:', err);
        return;
    }
    console.log('Folder deleted successfully!');
});