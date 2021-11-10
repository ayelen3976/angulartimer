import { Component, OnInit, Input } from '@angular/core';
import { interval, timer } from 'rxjs'

import { ServicesService } from '../../services/services.service'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() init: number = 60;
  public counter: number = 0;
  private estado: boolean = false;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {

    this.service.getUsers().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
    this.StartCountDown();
  }

  StartCountDown() {
    this.estado = true;
    if ( this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
  }
  }
  stopCount() {
    //const moment = this.init;
    //this.init = -1;
  
    this.counter = this.counter;
  }

  doCountDown() {

    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCount();
  }, 1000)
  }

  processCount() {
    console.log("count is " + this.counter);
    if(this.counter == 0){
      console.log("counter is END")
    } else {
      this.doCountDown()
    }
  }

}

// export class ButtonComponent implements OnInit {

//   constructor() { }
//   data: number = 0;
//   ngOnInit(): void {
//   //  const obs$ =  interval(2000);
//   //   obs$.subscribe((d) => {
//   //     console.log(d, 'time second')
//   //     this.data = d;
//   //   })
    
//     const ons$ = timer(5000, 1000);
      
//     ons$.subscribe((d) => {
//       if (d < 10) {
//         console.log(d, 'time second')
//       this.data = d;
//       }
      
//     })
//   }

// }
