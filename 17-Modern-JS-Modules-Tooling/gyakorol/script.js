import cloneDeep from "lodash";

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
