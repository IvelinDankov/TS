class BankAccount {
  owner: string;
  balance: number = 0;

  constructor(owner: string, balance: number) {
    (this.owner = owner), (this.balance = balance);
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be positive!");
    }
    this.balance = this.balance += amount;
    console.log(
      `Deposited amount is ${amount}, New Balance is ${this.balance}`
    );
  }
  withdraw(amount: number): boolean {
    if (amount > this.balance) {
      console.log("Insufficien funds!");
      return false;
    }
    this.balance = this.balance -= amount;
    console.log(`Withdraw ${amount}. New balance is ${this.balance}`);

    return true;
  }
  getBalance(): number {
    return this.balance;
  }
}

const account1 = new BankAccount("Velin", 10000);

account1.deposit(5000);
account1.withdraw(350);
account1.deposit(20000);
account1.withdraw(3000);
console.log(account1.getBalance());
