import { CaseInterface } from './case.interface';
import { DebtorInterface } from './debtor.interface';
import { OtherPeopleInterface } from './other-people.interface';

export interface WorkUnitInterface {
  name: string;
  workUnitId?: string;
  entityType?: string;
  status?: string;
  key?: string;
  date?: Date;
  type?: string;
  court?: string;
  bailiffName?: string;
  debtors?: DebtorInterface[];
  otherPeople?: OtherPeopleInterface[];
  cases?: CaseInterface[];
}
