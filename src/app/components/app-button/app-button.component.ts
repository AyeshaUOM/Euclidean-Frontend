import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {

  constructor() { }

  @Input() float = 'right'
  @Input() color = 'primary';
  @Input() state = 'done';
  @Input() type  = 'button';

  ngOnInit() {
  }

}
