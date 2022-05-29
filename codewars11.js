function removeChar(str){
  let remFirstChar = str.slice(1)
  let finalChar = remFirstChar.slice(0, remFirstChar.length - 1)
  return finalChar
};
