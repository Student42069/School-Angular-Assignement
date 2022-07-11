import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BdService } from '../bd.service';
import { User } from '../user';

@Component({
  selector: 'app-employes-component',
  templateUrl: './employes-component.component.html',
  styleUrls: ['./employes-component.component.css'],
})
export class EmployesComponentComponent implements OnInit {
  EMPLOYES: User[] = [];

  displayedColumns: string[] = [
    'prenom',
    'nom',
    'departement',
    'telephone',
    'courriel',
  ];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getEmployes(): void {
    this.bdService.getUsagers().subscribe((usagers) => {
      this.EMPLOYES = usagers.filter((employe) => employe.status == 'employe');
      this.dataSource = new MatTableDataSource<User>(this.EMPLOYES);
      this.dataSource.paginator = this.paginator;
    });
  }

  filter = new FormControl('');

  applyFilter() {
    this.dataSource.filter = this.filter.value
      ? this.filter.value.trim().toLowerCase()
      : '';
  }

  constructor(private bdService: BdService) {}

  ngOnInit(): void {
    this.getEmployes();
  }
}
