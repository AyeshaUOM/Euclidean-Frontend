import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ApiService } from "app/services/api.service";
import { ActivatedRoute } from "@angular/router";
import * as _ from "lodash";

@Component({
    selector: "app-create-student",
    templateUrl: "./create-student.component.html",
    styleUrls: ["./create-student.component.scss"]
})
export class CreateStudentComponent implements OnInit {
    constructor(private api: ApiService, private route: ActivatedRoute) {}

    student = new FormGroup({
        id: new FormControl(),
        indexNumber: new FormControl("", Validators.required),
        admissionDate: new FormControl(
            new Date().toLocaleDateString(),
            Validators.required
        ),
        admissionFee: new FormControl(0, Validators.required),
        firstName: new FormControl("", Validators.required),
        secondName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        dob: new FormControl(
            new Date().toLocaleDateString(),
            Validators.required
        )
    });

    ngOnInit() {
        this.student.controls["id"].setValue(
            +this.route.snapshot.paramMap.get("id")
        );
        if (this.student.value.id) {
            this.api.getOneStudent(this.student.value.id).subscribe(result => {
                this.student.setValue(
                    _.pick(result, [
                        "id",
                        "indexNumber",
                        "admissionDate",
                        "admissionFee",
                        "firstName",
                        "secondName",
                        "lastName",
                        "dob"
                    ])
                );
            });
        }
    }

    updateStudent() {
        const data = this.student.value;
        this.api.createStudent(data).subscribe(
            result => {
                console.log(result);
            },
            error => {
                alert('error');
            }
        )
    }
}
