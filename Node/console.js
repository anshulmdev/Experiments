// Console Usage
// console. error() writes to stderr , whereas console. log() writes to stdout

console.log('Nomral Console: ', 'Normal Console Log');
console.error('Console Error: ', new Error('Error Points'));
console.warn('Console Warn: ', 'Warning Message');

const { exec } = require('child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
