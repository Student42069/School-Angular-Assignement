import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  myForm!: FormGroup;
  accountInvalid: boolean = false;

  removeMessage() {
    this.accountInvalid = false;
  }

  onSubmit() {
    let user: User[];

    this.authService.getUsers().subscribe((users) => {
      user = users.filter(
        (e) =>
          e.username === this.myForm.controls['username'].value &&
          e.pw === this.myForm.controls['password'].value
      );
      if (user.length != 1) {
        this.accountInvalid = true;
      } else {
        if (user[0].role == 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/panier']);
        }
        this.authService.setCurrentLoggedIn(user[0]);
      }
    });
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: '',
      password: '',
    });
  }
}
