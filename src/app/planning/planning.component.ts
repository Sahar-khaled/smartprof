import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  address : string
  text2 : string ;
  text3:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , address : 'eeee' , text2 : 'aaaaaa', text3 : 'ddddd' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',address: 'ee' , text2: 'qqq' , text3 : 'ddddd'  },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',address: 'ee' , text2: 'qqq', text3 : 'ddddd'  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B',address: 'ee' , text2: 'qqq' , text3 : 'ddddd'  },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' ,address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' ,address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' ,address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' ,address: 'ee' , text2: 'qqq' , text3 : 'ddddd' },
];
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'  , 'text2' , 'text3' , 'address'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() {}

  ngOnInit(): void {}
}
