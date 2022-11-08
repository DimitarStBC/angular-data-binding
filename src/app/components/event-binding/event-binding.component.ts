import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  eventCallToAction: string = 'Update this title';
  titleEventBinding = 'To be updated...';

  constructor() { }

  ngOnInit(): void {
  }

  titleUpdate($event: string) {
    this.titleEventBinding = $event;
  }
}
