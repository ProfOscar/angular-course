import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input()student:any;

  constructor() { }

  ngOnInit(): void {
    this.randomStudentPro();
  }

  onStudentClick() {
    this.student.isPro = !this.student.isPro;
  }

  private randomStudentPro() {
    let num = Math.floor(Math.random() * 2);
    this.student.isPro = (num == 1);
  }
}
