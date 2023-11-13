function mean(num) {
	let numString = String(num);
  let sum = 0;
  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  const mean = sum / numString.length;
  return Math.floor(mean);
}