
// Reduce Method
const prices = [10, 25, 32, 45, 15, 18, 100, 22];

const result = prices.reduce((acc, curr) => {

  if (curr > 50){
    acc++;
  }
  return acc;
}, 0);

console.log(result);