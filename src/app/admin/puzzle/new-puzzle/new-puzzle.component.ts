import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OpendialogComponent } from '../../opendialog/opendialog.component';

@Component({
  selector: 'app-new-puzzle',
  templateUrl: './new-puzzle.component.html',
  styleUrls: ['./new-puzzle.component.scss']
})
export class NewPuzzleComponent implements OnInit {

  puzzleId : number;
  puzzleList : any=[]; 
  result : string;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPuzzleList();
  }

  puzzleDetails = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    exerciseType: new FormControl(),
    author: new FormControl(),
    noofQuestions: new FormControl()
  })

  editPuzzle(puzzleDetails: any) {
    window.location.hash = '#puzzleCard';
    this.puzzleDetails.patchValue({
      id: puzzleDetails.id,
      name: puzzleDetails.name,
      exerciseType: puzzleDetails.exerciseType,
      author: puzzleDetails.author,
      noofQuestions: puzzleDetails.noofQuestions,
    });
  }


  savePuzzle() {
    if (this.puzzleDetails.valid) {
      this.apiService.savePuzzle(this.puzzleDetails.value).subscribe(result => {
        window.location.reload();
      })
    }
  }

  getPuzzleList() {
    this.apiService.getPuzzles().subscribe(result => {
      this.puzzleList = Object.assign([], result);
      console.log(this.puzzleList);
    })
  }

  openDialog(puzzle: any): void {
    this.puzzleId = puzzle.id;
    const dialogRef = this.dialog.open(OpendialogComponent, {
      width: '500px',
       data: {msg: "Are you sure you want to delete "+puzzle.name, topic:"Delete Confirmation" }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.result = result;
       console.log(this.result)
       if(this.result=='ok'){
         this.apiService.deletePuzzle(this.puzzleId).subscribe(result=>{
          window.location.reload();
         })
       }
    });
  }

}
