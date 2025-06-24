var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.balance = 0;
        (this.owner = owner), (this.balance = balance);
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive!");
        }
        this.balance = this.balance += amount;
        console.log("Deposited amount is ".concat(amount, ", New Balance is ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficien funds!");
            return false;
        }
        this.balance = this.balance -= amount;
        console.log("Withdraw ".concat(amount, ". New balance is ").concat(this.balance));
        return true;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account1 = new BankAccount("Velin", 10000);
account1.deposit(5000);
account1.withdraw(350);
account1.deposit(20000);
account1.withdraw(3000);
console.log(account1.getBalance());
