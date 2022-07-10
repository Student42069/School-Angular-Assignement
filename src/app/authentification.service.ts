import { Injectable } from '@angular/core';
import users from '../assets/data/usagers.json';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  currentLoggedIn: User | '' = '';
  isLoggedIn: boolean = false;

  getUsers(): Observable<User[]> {
    const USERS = of(users);
    return USERS;
  }

  setCurrentLoggedIn(user: User | ''): void {
    this.currentLoggedIn = user;
    if (user == '') {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }

  isLoggedInAdmin(): boolean {
    return this.currentLoggedIn != '' && this.currentLoggedIn.role == 'admin';
  }

  constructor(private router: Router) {}
}
