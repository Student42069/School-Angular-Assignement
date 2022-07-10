import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-component',
  templateUrl: './sc-component.component.html',
  styleUrls: ['./sc-component.component.css'],
})
export class ScComponentComponent implements OnInit {
  cat = 'sc';
  constructor() {}

  ngOnInit(): void {}
}
