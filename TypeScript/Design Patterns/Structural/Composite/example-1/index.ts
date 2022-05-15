import Directories from './Directories';
import Files from './Files';


const file1 = new Files('Resume1.doc', 100);
const file2 = new Files('Resume2.pdf', 200);
const file3 = new Files('companyA.xls', 500);
const directory1 = new Directories('Directory 1', [file1, file2, file3]);

const file4 = new Files('Resume4.doc', 100);
const file5 = new Files('Resume5.pdf', 300);
const file6 = new Files('companyB.xls', 1000);
const directory2 = new Directories('Directory 2', [file4, file5, file6]);

const mainFile = new Files('companyC.ppt', 2000);
const parentDirectory = new Directories('Complete Data', [mainFile, directory1, directory2])


console.log(parentDirectory.print())

