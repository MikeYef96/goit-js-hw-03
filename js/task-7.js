/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit", // положить
  WITHDRAW: "withdraw", // снять
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: `id-${this.transactions.length + 1}`,
      type,
      amount,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const newDepositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    this.transactions.push(newDepositTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `You try to withdraw ${amount} but for this transaction not enough money in your account!`
      );
    } else {
      this.balance -= amount;
      const newWithdrawTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );
      this.transactions.push(newWithdrawTransaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log("Balance: ", this.balance);
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(`You found transaction by id '${id}': `, transaction);
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total = total + transaction.amount;
      }
    }
    return console.log(`The amount of "${type}" transactions is: ${total}`);
  },
};

account.deposit(150);
account.getBalance();
console.table(account.transactions);
account.deposit(100);
account.getBalance();
console.table(account.transactions);
account.withdraw(50);
account.getBalance();
console.table(account.transactions);
account.withdraw(350);
account.getBalance();
console.table(account.transactions);

account.getTransactionDetails("id-2");

account.getTransactionTotal("deposit");
account.getTransactionTotal("withdraw");
