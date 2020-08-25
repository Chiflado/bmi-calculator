import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  heigth = 0;
  weigth = 0;
  firstName = sessionStorage.getItem('firstName') || '';
  gender = sessionStorage.getItem('gender') || '';
  age = sessionStorage.getItem('age') || 0;

  constructor(private router: Router) { }

  setHeight(value) {
    this.heigth = value;
  }

  setWeigth(value) {
    this.weigth = value;
  }

  back() {
    this.router.navigate(['personal-data']);
  }

}
