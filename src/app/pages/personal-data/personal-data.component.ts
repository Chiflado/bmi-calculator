import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  formIsValid = false;
  firstName = sessionStorage.getItem('firstName') || '';
  gender = sessionStorage.getItem('gender') || '';
  age = sessionStorage.getItem('age') || 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setFormValidation();
  }

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
    sessionStorage.setItem('firstName', this.firstName);
    sessionStorage.setItem('age', this.age.toString());
    sessionStorage.setItem('gender', this.gender);
    this.router.navigate(['measurements']);
  }

}
