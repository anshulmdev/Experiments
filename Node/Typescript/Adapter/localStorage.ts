import { readFileSync, writeFile, existsSync, unlink } from 'fs';


class localStorage {
  items: Object
  

  constructor () {
    if(existsSync('localStorage.json')){
      console.log('Local Storage File exists')
      var txt = readFileSync('localStorage.json');
      this.items = JSON.parse(txt);
    } else this.items = {}
  }

  get length() {
    return Object.keys(this.items).length;
  };
  getItem(key) {
    return this.items[key]
  };
  setItem(key, value) {
    this.items[key] = value;
    writeFile('localStorage.json', JSON.stringify(this.items), error => {
      if (error) console.log('Error Occured in writing file', error.message)
    })
  };
  clear() {
    this.items = {};
    unlink('localStorage.json', () => {
      console.log('Local storage is cleared')
    })
  };
  
}


module.exports = new localStorage();
