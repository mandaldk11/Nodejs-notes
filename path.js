import path from 'node:path'

const filePath = path.join("dir", "students", "syllabus.txt");
const DataObj = path.parse(filePath)
console.log(filePath);
console.log(DataObj);
console.log(DataObj.name);
console.log(DataObj.ext);