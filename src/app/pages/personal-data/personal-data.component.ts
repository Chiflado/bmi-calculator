import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  formIsValid = false;
  firstName = '';
  gender = '';
  age = 0;

  constructor(private router: Router) { }

  setName(value) {
    this.firstName = value;
    this.setFormValidation();
  }

  setGender(value) {
    this.gender = value;
    this.setFormValidation();
  }

  setAge(value) {
    this.age = value;
    this.setFormValidation();
  }

  setFormValidation() {
    this.formIsValid = this.firstName.length > 0 && this.gender.length > 0 && this.age > 0;
  }

  navigatesToMeasurementsPage() {
    this.router.navigate(['measurements']);
  }

}
