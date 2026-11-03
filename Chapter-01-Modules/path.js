import path from 'node:path'


// console.log(path.resolve('users', 'docs', 'file.txt'));



const parsed = path.parse('/home/user/dir/file.txt');
console.log(parsed);

// output-

/*{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
} */