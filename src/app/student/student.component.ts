import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = ['Rosi Mario', 'Coscialunga Giovanna', 'Platini Michel', 'Scarlett Johansson', 'Conte Giuseppe', 'Conte Antonietta', 'Bracco Baldo', 'Paperina'];

  activeStudent = '';
  isFemale = false;

  constructor() {
    let num = Math.floor(Math.random() * this.students.length);
    if (num % 2 != 0) {
      this.isFemale = true;
    }
    this.activeStudent = this.students[num];
  }

  ngOnInit(): void {
  }

}
