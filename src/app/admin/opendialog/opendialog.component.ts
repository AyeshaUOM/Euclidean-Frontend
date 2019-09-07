import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core'; 


export interface DialogData {
  msg: string;
  topic: string;
  result : string;
}

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.scss']
})
export class OpendialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OpendialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    msg = this.data.msg;
    topic = this.data.topic;

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(){
    this.dialogRef.close('ok');
  }

}
