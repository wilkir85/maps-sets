// 1. 1,2,3,4
// 2. ref
// 3. 0: {Array(3) => true} {Array(3) => false}
// hasDuplicates
const hasDuplicate = arr => new Set(arr).size !== arr.length
// vowelCount
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }