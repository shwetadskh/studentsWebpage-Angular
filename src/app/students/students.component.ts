import { Component, OnInit } from '@angular/core';
import { Student } from '../student'; //interface
import { STUDENTS } from '../mock-students'; //student data
 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students= STUDENTS;
  selectedStudent?: Student;
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}

