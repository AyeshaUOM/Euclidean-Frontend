import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eu-classes',
  templateUrl: './eu-classes.component.html',
  styleUrls: ['./eu-classes.component.scss']
})
export class EuClassesComponent implements OnInit {

  euClass = new FormGroup({
    id: new FormControl(''),
    dayOfWeek: new FormControl('', Validators.required),
    timeOfDay: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    isActive: new FormControl(''),
    user: new FormControl(''),
    branch: new FormControl('', Validators.required),
  })

  classList: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getClassList();
  }

  getClassList() {
    this.apiService.getClasses().subscribe(result => {
      this.classList = Object.assign([], result);
    })
  }

  editBranch(euClass: any) {
    this.euClass = euClass;
  }

  resetCurrentForm() {
    this.euClass.reset({ id: 0, isActive: true});
  }

  saveClass() {
    if(this.euClass.valid) {
      this.apiService.saveClass(this.euClass).subscribe(result => {
        this.resetCurrentForm();
        this.getClassList();
      })
    }   
  }
}
