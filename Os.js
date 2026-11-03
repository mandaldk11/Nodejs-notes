// const os =require('os') -- old version
import os from 'os';

//Os-system info-

// console.log('Platform:', os.platform());
// console.log('Architecture:', os.arch());
// console.log('Hostname:', os.hostname());
// console.log('Home Directory:', os.homedir());

console.log('\n--- Memory Info ---');
// Convert bytes to Gigabytes 
// const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(totalMemGB);
// console.log(freeMemGB);

console.log('\n--- CPU Info ---');
const cpus = os.cpus();
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`Number of Cores: ${cpus.length}`);