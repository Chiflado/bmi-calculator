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

  formIsValid = false;

  constructor(private router: Router) { }

  setHeight(value) {
    this.heigth = value;
    sessionStorage.setItem('height', this.heigth.toString());
    this.setFormValidation();
  }

  setWeigth(value) {
    this.weigth = value;
    sessionStorage.setItem('weight', this.weigth.toString());
    this.setFormValidation();
  }

  cancel() {
    sessionStorage.clear();
    this.router.navigate(['personal-data']);
  }

  submit() {
    this.router.navigate(['summary']);
  }

  setFormValidation() {
    this.formIsValid = this.weigth > 0 && this.heigth > 0;
  }

}
