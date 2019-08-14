// the map method takes the array then maps it in a complete new array
const prices = [10, 25, 32, 45, 15, 18, 100, 22];


// it created a new array and divided the each item in 2 
const salsePrices = prices.map(price => {
  return price / 2;
});
console.log(salsePrices);

const tlPrice = prices.map(price => {
   return price * 5.95;
});

console.log('Prices in TL');
console.log(tlPrice);

// example 2

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
]

const disProducts = products.map(product => {
  if(product.price > 30 ){
     return {
          name: product.name,
          price: product.price / 2
      }
  }
 
});

console.log(disProducts);