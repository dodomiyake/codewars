function descendingOrder(n){
  let arrNum = Array.from(String(n), Number);
  let sortedArr = arrNum.sort((a,b) => b - a)
  let revArr = Number(sortedArr.join(''))
  return revArr
}
