import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PaymentTypes } from './enums/payment.enum';
import { Account } from './types/account-response.type';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('accounts/:userId')
  getAccountDetails(
    @Param('userId') userId: string,
  ): Account {
    return this.appService.getAccountDetails(userId);
  }

  @Get('payments')
  getPayments(
    @Query('type') paymentType: PaymentTypes
  ): any {
    return this.appService.getPayments(paymentType);
  }
}
