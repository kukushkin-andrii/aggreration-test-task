import { Injectable } from '@nestjs/common';
import { aggregatedTransactionsData } from 'src/storage';
import { PaymentTypes } from './enums/payment.enum';
import { Account } from './types/account-response.type';
import { PaymentItem } from './types/payments-response.type';

@Injectable()
export class AppService {
  getAccountDetails(userId: string): Account {
    return aggregatedTransactionsData.get(userId);
  }

  getPayments(type: string = PaymentTypes.PAID): PaymentItem[] {
    const payments: PaymentItem[] = [];

    aggregatedTransactionsData.forEach((value, key) => {
      payments.push({
        userId: key,
        amount: value[type],
      })
    });

    return payments;
  }
}
