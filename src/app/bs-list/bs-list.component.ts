import { Component, OnInit } from '@angular/core';
import { BdService } from '../bd.service';
import { User } from '../user';

@Component({
  selector: 'app-bs-list',
  templateUrl: './bs-list.component.html',
  styleUrls: ['./bs-list.component.css'],
})
export class BsListComponent implements OnInit {
  CLIENTS: User[] = [];

  getClients(): void {
    this.bdService.getUsagers().subscribe((usagers) => {
      this.CLIENTS = usagers.filter((usager) => usager.status == 'client');
    });
  }

  constructor(private bdService: BdService) {}

  ngOnInit(): void {
    this.getClients();
  }
}
