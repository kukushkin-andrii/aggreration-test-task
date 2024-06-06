import * as transactionMock from 'src/transaction-mock';
import { aggregatedTransactionsData } from 'src/storage';
import { TransactionsType, ItemType } from './types/transactions.type';
import { Account } from 'src/app/types/account-response.type';
import { TransactionTypes } from './enums/transaction-types.enum';

class TransactionsJob {
  static run() {
    const job = new TransactionsJob();
    const transactions = job.getTransactions();
    job.processTransactions(transactions);
  }

  private getTransactions(previousItems: ItemType[] = []) {
    const transactionsResponse: TransactionsType = transactionMock.getTransactions();
  
    const mergedItems: ItemType[] = [...previousItems, ...transactionsResponse.items];
  
    if (transactionsResponse.meta.currentPage < transactionsResponse.meta.totalPages) {
      this.getTransactions(mergedItems);
    } else {
      return mergedItems;
    }
  }

  private processTransactions(items: ItemType[]) {
    items.forEach((item: ItemType) => {
      const defaultData = {
        balance: 0,
        earned: 0,
        spent: 0,
        paid: 0,
      };

      const userData: Account = aggregatedTransactionsData.get(item.userId) || defaultData;
      switch (item.type) {
        case TransactionTypes.EARNED:
          userData.balance += item.amount;
          userData.earned += item.amount;
          break;
        case TransactionTypes.PAYOUT:
          userData.balance -= item.amount;
          userData.paid += item.amount;
          break;
        case TransactionTypes.SPENT:
          userData.balance -= item.amount;
          userData.spent += item.amount;
          break;
      }

      aggregatedTransactionsData.set(item.userId, userData);
    });
  }
}

export default TransactionsJob;
