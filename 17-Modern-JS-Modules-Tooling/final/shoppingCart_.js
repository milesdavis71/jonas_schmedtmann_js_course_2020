// exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product}, ${quantity}`);
};
addToCart('kenyér', 10);

const totalPrice = 237;
const totalQuantity = 5;

export { totalPrice, totalQuantity };
export.addToCart = function(){}
const { addToCart } = require('./shoppingCart_.js');