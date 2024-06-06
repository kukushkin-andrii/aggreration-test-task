import * as cron from 'node-cron';
import TransactionsJob from './transactions-job/transactions-job';

const oncePerMinute: string = '* * * * *';

class Jobs {
  static initialize() {
    const jobs = new Jobs();
    jobs.startGetTransactionsJob();
  }

  private startGetTransactionsJob() {
    cron.schedule(oncePerMinute, TransactionsJob.run);
  }
}

export default Jobs;
