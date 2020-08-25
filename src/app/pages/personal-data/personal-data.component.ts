import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  myModel = 0;

  constructor() { }

  ngOnInit() {
  }

  setAge(value) {
    this.myModel = value;
  }

}
