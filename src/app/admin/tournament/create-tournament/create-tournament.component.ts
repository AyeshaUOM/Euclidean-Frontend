import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OpendialogComponent } from '../../opendialog/opendialog.component';



@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  tournamentId : number;
  tournamentList : any=[]; 
  result : string;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getTournamentList();
  }

  tournamentDetails = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    startingDate: new FormControl(
      new Date().toLocaleDateString(),
        Validators.required
    ),
    endingDate: new FormControl(
      new Date().toLocaleDateString(),
        Validators.required
    ),
    venue: new FormControl(),
    internalFee: new FormControl(),
    externalFee: new FormControl(),
    description :new FormControl(),
  })

  editTournament(tournamentDetails: any) {
    window.location.hash = '#tournmntCard';
    this.tournamentDetails.patchValue({
      id: tournamentDetails.id,
      name: tournamentDetails.name,
      startingDate: tournamentDetails.startingDate,
      endingDate: tournamentDetails.endingDate,
      venue:tournamentDetails.venue,
      internalFee:tournamentDetails.internalFee,
      externalFee:tournamentDetails.externalFee,
      description:tournamentDetails.description
    });
  }


  saveTournament() {
    if (this.tournamentDetails.valid) {
      this.apiService.saveTournament(this.tournamentDetails.value).subscribe(result => {
        window.location.reload();
      })
    }
  }

  getTournamentList() {
    this.apiService.getTournaments().subscribe(result => {
      this.tournamentList = Object.assign([], result);
      console.log(this.tournamentList);
    })
  }

  openDialog(tournament: any): void {
    this.tournamentId = tournament.id;
    const dialogRef = this.dialog.open(OpendialogComponent, {
      width: '500px',
       data: {msg: "Are you sure you want to cancel "+tournament.name, topic:"Cancel Confirmation" }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.result = result;
       console.log(this.result)
       if(this.result=='ok'){
         this.apiService.deleteTournament(this.tournamentId).subscribe(result=>{
          window.location.reload();
         })
       }
    });
}
}
