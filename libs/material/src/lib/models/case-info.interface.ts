import { BoughtAmountInterface } from './bought-amount.interface';
import { DueAmountInterface } from './due-amount.interface';
import { PaidAmountInterface } from './paid-amount.interface';

export interface CaseInfoInterface {
  workUnitId: string;
  debtor: string;
  date: Date;
  package: string;
  boughtAmount: BoughtAmountInterface;
  paidAmount: PaidAmountInterface;
  dueAmount: DueAmountInterface;
}
