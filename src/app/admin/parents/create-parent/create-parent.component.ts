import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-parent',
    templateUrl: './create-parent.component.html',
    styleUrls: ['./create-parent.component.scss']
})
export class CreateParentComponent implements OnInit {

    respond = {
        status: '',
        message: ''
    }

    parent = new FormGroup({
        id : new FormControl(0, Validators.required),

        fatherName : new FormControl(),
        fatherOccupation: new FormControl(),
        fatherOfficeAddress: new FormControl(),
        fatherMobileNumber: new FormControl('', [Validators.pattern("^[0-9]*$")]),

        motherName: new FormControl(),
        motherOccupation: new FormControl(),
        motherOfficeAddress: new FormControl(),
        motherMobileNumber: new FormControl('', [Validators.pattern("^[0-9]*$")]),

        addressLine1: new FormControl('', Validators.required),
        addressLine2: new FormControl(),
        addressLine3: new FormControl(),
        landLineNumber: new FormControl(),
        smsAlertNumber: new FormControl(),
    });

    constructor(
        private api: ApiService, 
        private toastr: ToastrService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() { 
        // Check update or add
        var routeParamId = this.route.snapshot.paramMap.get('id');
        if(routeParamId){
            this.parent.patchValue({id: routeParamId});
        }

        // If update, get existing details
        if(this.parent.value.id){
            this.api.getParent(this.parent.value.id).subscribe((data : any) => {
                console.log(data);
                this.parent.patchValue(data);
            })
        }
    }

    registerParent() {
        if (this.validate()) {
            this.respond.status = 'working';
            this.api.createParent(this.parent.value).subscribe((result) => {
                this.respond.status = 'done';
                this.toastr.success("Updated!");
            }, (error) => {
                this.respond.status = 'done';
            })
        }else{
            this.toastr.warning("Please fill all the required fields");
        }
    }

    validate() {
        // validate form
        let isValidate = this.parent.valid;
        if (isValidate) {
            if (!this.parent.value.mother.name && this.parent.value.father.name) {
                isValidate = false;
            }
        }

        return isValidate;
    }
}
