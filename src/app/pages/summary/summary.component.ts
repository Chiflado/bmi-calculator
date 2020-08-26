import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  isVisible = false;

  bmiNumber = 0;
  bmiClass = '';

  heigth = sessionStorage.getItem('height');
  weigth = sessionStorage.getItem('weight');
  firstName = sessionStorage.getItem('firstName');
  gender = sessionStorage.getItem('gender');
  age = sessionStorage.getItem('age');


  constructor(private router: Router) { }

  ngOnInit() {
    const loadingScreen: HTMLElement = document.getElementById('loadingScreen');
    this.calculateBMI();
    setTimeout(() => {
      loadingScreen.remove();
      this.isVisible = true;
    }, 3000);
  }


  calculateBMI() {
    const heigthM = Number(this.heigth) / 100;
    this.bmiNumber = Number((Number(this.weigth) / Math.pow(heigthM, 2)).toFixed(2));
    if (this.bmiNumber < 16) {
      this.bmiClass = 'súlyos soványság';
    }
    if (16 < this.bmiNumber && this.bmiNumber <  16.99) {
      this.bmiClass = 'mérsékelt soványság';
    }
    if (17 < this.bmiNumber && this.bmiNumber <  18.49) {
      this.bmiClass = 'enyhe soványság';
    }
    if (18.5 < this.bmiNumber && this.bmiNumber <  24.99) {
      this.bmiClass = 'normális testsúly';
    }
    if (25 < this.bmiNumber && this.bmiNumber <  29.99) {
      this.bmiClass = 'túlsúlyos';
    }
    if (30 < this.bmiNumber && this.bmiNumber <  34.99) {
      this.bmiClass = 'I. fokú elhízás';
    }
    if (35 < this.bmiNumber && this.bmiNumber <  39.99) {
      this.bmiClass = 'II. fokú elhízás';
    }
    if (40 <= this.bmiNumber) {
      this.bmiClass = 'III. fokú (súlyos) elhízás';
    }
  }

  fillAgain() {
    sessionStorage.clear();
    this.router.navigate(['personal-data']);
  }

  modify() {
    this.router.navigate(['personal-data']);
  }

}
