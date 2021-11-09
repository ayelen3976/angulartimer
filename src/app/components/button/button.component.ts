import { Component, OnInit } from '@angular/core';
import {interval, timer} from 'rxjs'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor() { }
  data: number = 0;
  btnStart()
  {

     const ons$ = timer(2000, 1000);
      
     ons$.subscribe((d) => {
   if (d < 10) {
        console.log(d, 'time second')
       this.data = d;
       }
      
     })
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
