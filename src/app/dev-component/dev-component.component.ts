import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-component',
  templateUrl: './dev-component.component.html',
  styleUrls: ['./dev-component.component.css'],
})
export class DevComponentComponent implements OnInit {
  cat = 'dev';
  constructor() {}

  ngOnInit(): void {}
}
