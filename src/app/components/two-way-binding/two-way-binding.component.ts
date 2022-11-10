import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  middle_name: string = '';
  last_name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleLastName($event: Event) {
    this.last_name = ($event.target as HTMLInputElement).value
  }
}
