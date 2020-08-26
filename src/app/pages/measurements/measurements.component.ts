import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  height = 0;
  weight = 0;
  heightInM = '';
  firstName = sessionStorage.getItem('firstName') || '';
  gender = sessionStorage.getItem('gender') || '';
  age = sessionStorage.getItem('age') || 0;

  formIsValid = false;

  constructor(private router: Router) { }

  setHeight(value) {
    this.height = value;
    this.heightInM = ((this.height / 100).toFixed(2)).toString();
    sessionStorage.setItem('height', this.height.toString());
    this.setFormValidation();
  }

  setWeight(value) {
    this.weight = value;
    sessionStorage.setItem('weight', this.weight.toString());
    this.setFormValidation();
  }


  cancel() {
    sessionStorage.clear();
    this.router.navigate(['personal-data']);
  }

  navigateBack() {
    this.router.navigate(['personal-data']);
  }

  submit() {
    this.router.navigate(['summary']);
  }

  setFormValidation() {
    this.formIsValid = this.weight > 0 && this.height > 0;
  }

}
