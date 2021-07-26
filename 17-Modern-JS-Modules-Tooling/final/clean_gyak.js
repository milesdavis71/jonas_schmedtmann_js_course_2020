'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// getlimit;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// addExpense
const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limit, user)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

//  3 new budget hozzáadása
const newBudget1 = addExpense(budget, spendingLimits, 30, 'Fagyi 🍦');
console.log(newBudget1);

// checkExpenses
const checkExpenses = (state, limit) =>
  state.map(entry =>
    entry.value < getLimit(limit, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
const finalBudget = checkExpenses(newBudget1, spendingLimits);
console.log(finalBudget);

// logBigExpenses
const logBigExpenses = function (state, bigLimit) {
  const bigExpanse = state
    .filter(entry => entry.value < -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  console.log(bigExpanse);
};

logBigExpenses(finalBudget, 600);
