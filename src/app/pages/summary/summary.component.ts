import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit() {
    const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
    setTimeout(() => {
      splashScreen.remove();
      this.isVisible = true;
    }, 3000);
  }

}
