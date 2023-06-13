const coffeeMenu = require('./coffee_data.js')
console.table(coffeeMenu);

//2. Print an array of all the drinks on the menu.
const drinkName = (item) => item.name;
console.log(coffeeMenu.map(drinkName));

//3. Print an array of drinks that cost 5 and under.
const fiveAndUnder = (item) => item.price <= 5;
const itemsUnderFive = coffeeMenu.filter(fiveAndUnder);
console.log(itemsUnderFive);

//4. Print an array of drinks that are priced at an even number.
const evenPrice = (item) => (item.price % 2 == 0);
const evenPriced = coffeeMenu.filter(evenPrice);
console.log(evenPriced);

//5. Print the total if you were to order one of every drink.
const findPriceArray = (array) => array.price;
const priceArray = coffeeMenu.map(findPriceArray);

const sumTotalCost = (accumulator, currentValue) => accumulator+currentValue;
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice);


//6. Print an array with all the drinks that are seasonal.

const isSeasonal = (condition) => (condition.seasonal === true);
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.log(seasonalItems);

//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const beansScript = (array) => (array.name + " with imported beans")
const finalOutput = seasonalItems.map(beansScript)
console.log(finalOutput)
