import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/services/services.service';


export interface PeriodicElement {
  name: string;
  id: number;
  username: string;
  email: string;
}



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {


  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  constructor(private service: ServicesService) { }
  ngOnInit(): void {
    let list = this.service.getUsers()
    list.subscribe(
      ((response) => {
        this.dataSource.data = response as PeriodicElement[]
      })
      // (error) => {
      //   console.log(error);
      // }
    );
  }
 

}
