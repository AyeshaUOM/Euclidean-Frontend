import { ApiService } from 'app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  userList: any;
  branchList: any;

  user = new FormGroup({
    id: new FormControl(0),
    role: new FormControl("Default"),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    addressLine3: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    isActive: new FormControl(true),
    branchId: new FormControl('', Validators.required),
    branch: new FormControl(null),
    image: new FormControl(''),
  })

  ngOnInit() {
    this.loadUserList();
    this.loadBranchList();
  }

  newUser() {
    this.user.reset({Id: 0, role: 'Default', isActive: true, branch: null});
  }

  loadUserList() {
    this.apiService.getUsers().subscribe(result => {
      this.userList = Object.assign([], result);
    })
  }

  loadBranchList() {
    this.apiService.getBranches().subscribe(result => {
      console.log(result);
      this.branchList = Object.assign([], result);
    })
  }

  saveUser() {
    if (this.user.valid) {
      this.apiService.saveUser(this.user.value).subscribe(result => {
        this.newUser();
        this.loadUserList();
      })
    }
  }

  editUser(user: any) {
    this.user.patchValue({
      id: user.id,
      role: user.role,
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      addressLine1: user.addressLine1,
      addressLine2: user.addressLine2,
      addressLine3: user.addressLine3,
      email: user.email,
      telephone: user.telephone,
      isActive: user.isActive,
      branchId: user.branchId,
      branch: user.branch,
      image: user.image
    });
  }
}
