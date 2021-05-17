class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locator = navigator.language;
  }
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account('Pitju', 'EUR', 1111);
acc1.movements.push(250);
acc1.movements.push(-140);
console.log(acc1);
