import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() init: number = 60;

  public counter: number = 60;
  estado: boolean = false;
  save: number = 0;
  btnColor: String = '';
  btnDisabled: boolean = false;
  showStatics: boolean = false;
  alreadyPlay: string = 'false';

  constructor(public dialog: MatDialog) { }

  openDialog() {

    this.dialog.open(DialogComponent, {
      // height: '400px',
      width: '100%',
    });


  }

  staticsShowSquare() {
    this.showStatics = true;
  }

  ngOnInit(): void {

    //initialitation

    const getLocal = localStorage.getItem('pressbutton');
    if (getLocal === 'true') {
      this.estado = true;
    } else {
      this.StartCountDown();
    }
  }

  StartCountDown() {
    if (this.estado === false && this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
    }
  }
  stopCount() {
    this.estado = true;
    this.staticsShowSquare();
    //this.counter = this.counter;

    const getLocal = localStorage.getItem('pressbutton');
    if (getLocal === 'true') {
      this.estado = true;
      alert('YA TÉRMINO SU TURNO!');
    }
  }

  doCountDown() {
    if (this.estado) {
      this.save = this.counter;

      this.alreadyPlay = 'true';
      localStorage.setItem('pressbutton', this.alreadyPlay);
      if (this.save > 0) {
        this.counter = this.save;
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
