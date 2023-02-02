import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { WorkUnitInterface } from '../models/work-unit.interface';

const WORK_UNIT: WorkUnitInterface[] = [
  {
    workUnitId: '00000000-0000-0000-0000-000000000005',
    entityType: '00000000-0000-0000-0000-000000000002',
    status: '00000000-0000-0000-0000-000000000000',
    key: '0000557',
    date: new Date('4/4/2016'),
    type: '00000000-0000-0000-0000-000000000003',
    court: 'ЧСИ - 851',
    name: 'Физическо лице 1',
    bailiffName: 'Физическо лице 1',
    debtors: [
      {
        workUnitId: '00000000-0000-0000-0000-000000000022',
        name: 'Лице 11',
      },
      {
        name: 'Лице 12',
      },
    ],
    otherPeople: [
      {
        workUnitId: '00000000-0000-0000-0000-000000000024',
        name: 'Лице 13',
      },
    ],
    cases: [
      {
        workUnitId: '00000000-0000-0000-0000-000000000042',
        package: 'Случай 21',
        status: 0,
      },
    ],
  },
];
@Component({
  selector: 'eos-eos-tree',
  templateUrl: './eos-tree.component.html',
  styleUrls: ['./eos-tree.component.css'],
})
export class EosTreeComponent {
  treeControl = new NestedTreeControl<WorkUnitInterface>(
    (node) => node.debtors
  );
  dataSource = new MatTreeNestedDataSource<WorkUnitInterface>();

  constructor() {
    this.dataSource.data = WORK_UNIT;
  }

  hasChild = (_: number, node: WorkUnitInterface) =>
    !!node.debtors && node.debtors.length > 0;
}
