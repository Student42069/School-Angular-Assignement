import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import { BdService } from './bd.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  currentLoggedIn: User | '' = '';
  isLoggedIn: boolean = false;

  getUsers(): Observable<User[]> {
    return this.bdService.getUsagers();
  }

  getCurrentLoggedIn(): User | '' {
    return this.currentLoggedIn;
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

  constructor(private router: Router, private bdService: BdService) {}
}
