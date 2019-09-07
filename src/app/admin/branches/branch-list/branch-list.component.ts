import { ApiService } from 'app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {

  branch = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    location: new FormControl(''),
    isActive: new FormControl(true)
  })

  branchList: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBranchList();
  }

  getBranchList() {
    this.apiService.getBranches().subscribe(result => {
      this.branchList = Object.assign([], result);
      console.log(this.branchList);
    })
  }

  editBranch(branch: any) {
    this.branch.patchValue({
      id: branch.id,
      name: branch.name,
      location: branch.location,
      isActive: branch.isActive
    });
  }

  resetCurrentForm() {
    this.branch.reset({ id: 0, isActive: true });
  }

  saveBranch() {
    if (this.branch.valid) {
      this.apiService.saveBranch(this.branch.value).subscribe(result => {
        this.resetCurrentForm();
        this.getBranchList();
      })
    }
  }
}
