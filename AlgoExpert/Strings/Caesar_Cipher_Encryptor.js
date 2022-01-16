/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

Sample Input
string = "xyz"
key = 2
Sample Output
"zab"
*/
function caesarCipherEncryptor(string, key) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const dict = {}
      const rdict = {}
      for(alphabet in alphabets){
          dict[alphabets[alphabet]] = alphabet*1
          rdict[alphabet*1] = alphabets[alphabet]
      }
      let ans = ''
      for(let i=0; i<string.length; i++) {
          ans+= rdict[(dict[string[i]] + key)%26]
      }
      return ans
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  