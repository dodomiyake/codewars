function sumTwoSmallestNumbers(numbers) {
  let sortNum = numbers.sort(function(a, b){return a - b})
  return sortNum[0] + sortNum[1]
}
