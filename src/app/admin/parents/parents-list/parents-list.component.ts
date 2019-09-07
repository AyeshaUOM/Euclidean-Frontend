import { ApiService } from 'app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.scss']
})
export class ParentsListComponent implements OnInit {

  parents = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getParents().subscribe((data: any) => {
      this.parents = Object.assign([], data);
      console.log(this.parents);
    });
  }

}
