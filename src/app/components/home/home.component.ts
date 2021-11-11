import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showSimulation: string = 'true';

  constructor() {}

  ngOnInit(): void {
    const again = localStorage.getItem('simulacion');
    if (again === 'false') {
      this.showSimulation = 'false';
    } else {
      this.showSimulation = 'true';
      this.startTimer();
    }
  }

  startTimer() {
    const contador = interval(1000);
    contador.subscribe((n) => {
      if (n === 6) {
        alert('TU TURNO !');
        const update = (this.showSimulation = 'false');

        localStorage.setItem('simulacion', update);
      }
    });
  }
}
