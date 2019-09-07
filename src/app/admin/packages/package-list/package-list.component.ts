import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  package = new FormGroup({
    id: new FormControl(0),
    packageName: new FormControl('', Validators.required),
    noOfMonths: new FormControl('', Validators.required),
    precentage: new FormControl('', Validators.required),
    isAdmissionWaveOff: new FormControl(false),
    isActive: new FormControl(true),
    branch: new FormControl(null)
  })

  defaultPayment = new FormGroup({
    Id: new FormControl(0),
    classFee: new FormControl('', Validators.required),
    admissionFee: new FormControl('', Validators.required),
    latePaymentDate: new FormControl(0),
    latePaymentPrecentage: new FormControl(0),
    latePaymentEnabled: new FormControl(false),
    monthEndPrecentage: new FormControl(0),
    monthEndEnabled: new FormControl(false),
  })

  packageList: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadDefaultPayment();
    this.loadPackages();
  }

  loadPackages() {
    this.apiService.getPackages().subscribe(result => {
      this.packageList = Object.assign([], result);
    })
  }

  savePackage() {
    if (this.package.valid) {
      this.apiService.savePackage(this.package.value).subscribe(result => {
        this.newPackage();
        this.loadPackages();
      })
    }
  }

  loadDefaultPayment() {
    this.apiService.getDefaultPayment().subscribe(result => {
      let defPayment = Object.assign([], result)[0];
      if (defPayment) {
        this.defaultPayment.patchValue({
          Id: defPayment.id,
          classFee: defPayment.classFee,
          admissionFee: defPayment.admissionFee,
          latePaymentDate: defPayment.latePaymentDate,
          latePaymentPrecentage: defPayment.latePaymentPrecentage,
          latePaymentEnabled: defPayment.latePaymentEnabled,
          monthEndPrecentage: defPayment.monthEndPrecentage,
          monthEndEnabled: defPayment.monthEndEnabled,
        });
      }
    })
  }

  saveDefaultPayment() {
    if (this.defaultPayment.valid) {
      this.apiService.saveDefaultPayment(this.defaultPayment.value).subscribe(result => {
        this.loadDefaultPayment();
      })
    }
  }

  newPackage() {
    this.package.reset({ Id: 0, isAdmissionWaveOff: false, isActive: true, branch: null });
  }

  editPackage(pack: any) {
    this.package.patchValue({
      id: pack.id,
      packageName: pack.packageName,
      noOfMonths: pack.noOfMonths,
      precentage: pack.precentage,
      isAdmissionWaveOff: pack.isAdmissionWaveOff,
      isActive: pack.isActive,
      branch: pack.branch
    });
  }
}
