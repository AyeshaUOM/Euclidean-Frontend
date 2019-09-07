import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class studentPuzzle{
collectedBy: number
correctedBy: number
id: number
issueDate: Date
noofCorrectAnswers: number
puzzleId: number
studentId: number
submitDate: Date
}

@Component({
  selector: 'app-assign-puzzle',
  templateUrl: './assign-puzzle.component.html',
  styleUrls: ['./assign-puzzle.component.scss']
})
export class AssignPuzzleComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  selectedPuzzle : string
  // selectedUser : string
  // marks : number
  puzzleList : any = []
  userList : any = []
  recordList : any = []
  dataSource1 : any =[]
  dataSource2 : any =[]
  puzzleId : number;
  // submitDate : Date;
  // correctedBy : number;
  studentPuzzle = new studentPuzzle()

  ngOnInit() {
    this.getRecords()
    this.getUsers()
    this.getPuzzles()
    this.getStudents()
    this.puzzleStudentDetails.disable();
  }
    displayedColumns1: string[] = ['studentId', 'name', 'puzzle', 'issuedDate', 'submittedDate', 'correctedBy','marks'];
    displayedColumns2: string[] = ['indexNumber', 'name', 'grade', 'puzzle'];

    applyFilter1(filterValue: string) {
      this.dataSource1.filter = filterValue.toString().trim().toLowerCase();
    }

    applyFilter2(filterValue: any) {
      this.dataSource2.filter = filterValue.trim().toLowerCase();
    }

    getPuzzles(){
      this.apiService.getPuzzles().subscribe(result => {
        this.puzzleList = Object.assign([], result);
      })
    }

    getUsers(){
      this.apiService.getUsers().subscribe(result => {
        this.userList = Object.assign([], result);
      })
    }

    getRecords(){
      this.apiService.getStudentPuzzle().subscribe(result => {
        this.dataSource1 = new MatTableDataSource(Object.assign([], result));
       })
    }
  
    getStudents(){
      this.apiService.getStudent().subscribe(result => {
        this.dataSource2 = new MatTableDataSource(Object.assign([], result));
    });
  }

 
    puzzleStudentDetails = new FormGroup({
      collectedBy: new FormControl(),
      correctedBy: new FormControl(),
      id: new FormControl(),
      issueDate: new FormControl(),
      noofCorrectAnswers: new FormControl(),
      puzzleId: new FormControl(),
      studentId: new FormControl(),
      submitDate: new FormControl(),
      studentName : new FormControl()
    })

    editStudentPuzzle(puzzleDetails: any) {
      let element = document.getElementById('topdiv');
      element.scrollIntoView(true);
      this.puzzleStudentDetails.enable();
      window.location.hash = '#puzzleCard';
      this.puzzleStudentDetails.patchValue({
      collectedBy  : puzzleDetails.collectedBy,
      correctedBy : puzzleDetails.correctedBy,
      id : puzzleDetails.id,
      issueDate : puzzleDetails.issueDate,
      noofCorrectAnswers : puzzleDetails.noofCorrectAnswers,
      puzzleId : puzzleDetails.puzzleId,
      studentId : puzzleDetails.studentId,
      submitDate :puzzleDetails.submitDate,
      studentName : puzzleDetails.student.firstName
      });
    }

    saveAssignedPuzzle(){
      if(this.puzzleStudentDetails.value.id==null){
        return
      }
      this.apiService.saveStudentPuzzle(this.puzzleStudentDetails.value).subscribe(result => {
        window.location.reload()
      })
    }

    DeleteAssignedPuzzle(){
      if(this.puzzleStudentDetails.value.id==null){
        return
      }
      this.apiService.deleteStudentPuzzle(this.puzzleStudentDetails.value.id).subscribe(result => {
        window.location.reload()
      })
    }

    onOptionsSelected(puzzleId : any){
      this.puzzleId = puzzleId;
    }

    saveRow(row : any){
      console.log(row)
      this.studentPuzzle = new studentPuzzle()
      this.studentPuzzle.id = 0
      this.studentPuzzle.issueDate =  new Date()
      this.studentPuzzle.puzzleId = this.puzzleId
      this.studentPuzzle.studentId = row.id
      this.apiService.saveStudentPuzzle(this.studentPuzzle).subscribe(result => {
      })
    }
}
