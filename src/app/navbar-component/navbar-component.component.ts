import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  logout(): void {
    this.auth.setCurrentLoggedIn('');
    this.router.navigate(['/logout']);
  }

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  get isAdminLoggedIn(): boolean {
    return this.auth.isLoggedInAdmin();
  }

  constructor(private auth: AuthentificationService, private router: Router) {}

  ngOnInit(): void {}
}
