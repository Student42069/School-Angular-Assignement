import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infra-component',
  templateUrl: './infra-component.component.html',
  styleUrls: ['./infra-component.component.css'],
})
export class InfraComponentComponent implements OnInit {
  cat = 'infra';
  constructor() {}

  ngOnInit(): void {}
}
