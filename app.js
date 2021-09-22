const priseGoodsOne = 15.678;
const priseGoodTwo = 123.965;
const priseGoodThree = 90.2345;
const maxPrise  = Math.max(priseGoodThree , priseGoodTwo , priseGoodsOne) ;

console.log(maxPrise);

const minPrise = Math.min(priseGoodThree , priseGoodTwo , priseGoodsOne) ;
console.log(minPrise);

const sumPrise = priseGoodsOne + priseGoodTwo + priseGoodThree ;
console.log(sumPrise);

const downPriseSume = Math.floor(priseGoodsOne)+ Math.floor(priseGoodTwo)+ Math.floor(priseGoodThree);
console.log(downPriseSume);

const sumRound = Math.round(downPriseSume/100)*100;
console.log(sumRound);


const evenSum = !(sumRound%2);
console.log(evenSum);

const remainder = 500 - sumPrise ;
console.log(remainder);

const averageSum = (sumPrise/3).toFixed(2);
console.log(averageSum);

const sale = Math.round(Math.random() * 100);
console.log(sale);

const saleTwo = ((100 - sale) * sumPrise / 100).toFixed(2);
console.log(saleTwo);

const twoPrise = (sumPrise/ 2).toFixed(2);  
console.log(twoPrise);

const profit = (saleTwo - (sale * sumPrise / 100)).toFixed(2);
console.log(profit);







