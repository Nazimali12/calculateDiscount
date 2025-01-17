class BankAccount {
    constructor(accountName, initialBalance = 0) {
      this.accountName = accountName;
      this.balance = initialBalance;
    }
    Withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`$${amount} withdrawn. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    }
    Deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} deposited. New balance: $${this.balance}`);
      } else {
        console.log("Please deposit a positive amount.");
      }
    }
  }
  const CreateAccount = (accountName, initialBalance = 0) => {
    const account = new BankAccount(accountName, initialBalance);
    console.log(`Account created for ${account.accountName} with balance: $${account.balance}`);
    return account;
  };
  const myAccount = CreateAccount("Nazim", 500); 
  
  myAccount.Deposit(200); 
  myAccount.Withdraw(100); 
  myAccount.Withdraw(700); 
  