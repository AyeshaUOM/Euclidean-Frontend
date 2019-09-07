import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(private api: ApiService) {

  }

  student: any[];
  classList: any[];
  clsName: string='Select Class';
  currentDate = new Date();

  today = new Date();
  date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();

  checkValue(values: any,studentid: any,classid: any) {
    console.log(studentid+' '+classid);
    if(values.currentTarget.checked){
      console.log('true');
      this.api.markAttendance('1',studentid,classid, this.date.toString()).subscribe((data: any) => {
        this.student = data;
        console.log(this.student);
      });
    }else{
      console.log('false');
      this.api.markAttendance('0',studentid,classid, this.date.toString()).subscribe((data: any) => {
        this.student = data;
        console.log(this.student);
      });
    }
  }
  ngOnInit() {
    //this.getStudentList();
  }

  getStudentList() {
    this.api.getAttendance().subscribe((data: any) => {
      this.student = data;
      console.log(this.student);
    });
  }

  getAttendanceByClass(classID, className) {
    this.api.getAttendanceByClass(classID, this.date.toString()).subscribe((data: any) => {
      console.log(data);
      this.student = data;
    });
    this.clsName = className;
  }

}
