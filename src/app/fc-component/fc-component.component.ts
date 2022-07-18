import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-component',
  templateUrl: './fc-component.component.html',
  styleUrls: ['./fc-component.component.css'],
})
export class FcComponentComponent implements OnInit {
  cat: string = 'fc';
  constructor() {}

  ngOnInit(): void {}
}
