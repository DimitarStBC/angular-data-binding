import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  some_template_expression: number = 90;
  styleExp: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
