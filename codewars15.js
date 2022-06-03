function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  let betterScore = average < yourPoints ? true : false;
  return betterScore;
}
