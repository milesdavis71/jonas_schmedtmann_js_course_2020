// exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${product}, ${quantity}`);
// };

// const totalPrice = 237;
// const totalQuantity = 5;

// export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
}
