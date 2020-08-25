import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  heigth = 0;
  weigth = 0;

  constructor() { }

  setHeight(value) {
    this.heigth = value;
  }

  setWeigth(value) {
    this.weigth = value;
  }

}
