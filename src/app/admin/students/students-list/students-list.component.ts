import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

    constructor(private api: ApiService) {

    }

    students: any[];

    ngOnInit() {
        this.api.getStudent().subscribe((result: any[]) => {
            console.log(result);
            this.students = result;
        });

    }


}
