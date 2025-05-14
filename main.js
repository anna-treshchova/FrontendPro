class BankAccount {
    #balance;

    constructor(initialAmount = 0) {
        this.#balance = initialAmount;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposited amount is invalid!")
            return;
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || this.#balance < amount) {
            console.log("Withdrawal amount is invalid!")
            return;
        }
        this.#balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());
