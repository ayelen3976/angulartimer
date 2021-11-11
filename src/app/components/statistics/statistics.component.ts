import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  username: number;
  color: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { username: 2, name: 'Purple', color: 'purple' },
  { username: 3, name: 'Blue', color: 'blue' },
  { username: 2, name: 'Green', color: 'green' },
  { username: 3, name: 'Yellow', color: 'yellow' },
  { username: 2, name: 'Orange', color: 'orange' },
  { username: 3, name: 'Red', color: 'red' },
  { username: 2, name: 'Gray', color: 'gray' },
  { username: 3, name: 'White', color: 'rgb(236, 226, 215)' },
];
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  data = [];
  constructor() {}
  ngOnInit(): void {}

  displayedColumns: string[] = ['username', 'name'];
  dataSource = ELEMENT_DATA;
}
