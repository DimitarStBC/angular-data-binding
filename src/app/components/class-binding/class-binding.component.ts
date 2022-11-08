import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  some_property_class = {
    some_other_class: 'some_other_class'
  }
  some_property_condition: boolean = true;
  some_property_conditions = {
    some_other_class: true,
    some_border_class: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
