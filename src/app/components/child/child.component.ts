import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() isEventDemo = false;

  @Output() titleUpdate = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitTitleUpdate() {
    this.titleUpdate.emit('new Title');
  }
}
