import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
})
export class SimulationComponent implements OnInit {
  @Input() init: number = 60;
  // @Output() showSimulation = new EventEmitter<boolean>();

  public counter: number = 0;

  save: number = 0;
  btnColor: String = '';
  btnDisabled: boolean = false;
  showStatics: boolean = false;
  //auto Click
  autoClick: boolean = false;

  constructor() {}

  staticsShowSquare() {
    this.showStatics = true;
  }

  ngOnInit(): void {
    this.StartCountDown();

    setInterval(() => this.myMethodClick(), 5000);
  }
  myMethodClick() {
    this.autoClick = true;

    //  this.showSimulation.emit(false);
  }
  StartCountDown() {
    if (this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    if (this.autoClick) {
      this.save = this.counter;

      if (this.save > 0) {
        this.counter = 60;
        // this.init = 60

        if (this.save <= 60 && this.save >= 52) {
          this.btnColor = 'purple';
          console.log('color', this.btnColor);
        } else if (this.save <= 51 && this.save >= 42) {
          this.btnColor = 'blue';
          console.log('color', this.btnColor);
        } else if (this.save <= 41 && this.save >= 32) {
          this.btnColor = 'green';
          console.log('color', this.btnColor);
        } else if (this.save <= 31 && this.save >= 22) {
          this.btnColor = 'yellow';
          console.log('color', this.btnColor);
        } else if (this.save <= 21 && this.save >= 12) {
          this.btnColor = 'orange';
          console.log('color', this.btnColor);
        } else if (this.save <= 11 && this.save >= 0) {
          this.btnColor = 'red';
          console.log('color', this.btnColor);
        }
      }
    } else {
      setTimeout(() => {
        this.counter = this.counter - 1;
        this.processCount();
      }, 1000);
    }
  }

  processCount() {
    if (this.counter == 0) {
      this.btnDisabled = true;
      this.btnColor = 'white';
      console.log('counter is END');
    } else {
      this.doCountDown();
    }
  }
}
