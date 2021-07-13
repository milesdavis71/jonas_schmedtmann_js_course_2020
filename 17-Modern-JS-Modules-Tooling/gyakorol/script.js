import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import xxx from "./node_modules/lodash-es/cloneDeep.js";
const state = {
  cart: [
    { product: "pizza", quantity: 5 },
    { product: "bread", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
