import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { BdService } from '../bd.service';
import { User } from '../user';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bdService: BdService,
    private ref: ChangeDetectorRef
  ) {}
  USAGERS: User[] = [];
  enModification: boolean[] = [];
  isEmploye: boolean[] = [];
  canAdd: boolean = true;
  pwVisible: string[] = [];

  get canItAdd(): boolean {
    return !this.canAdd;
  }

  getUsagers(): void {
    this.bdService.getUsagers().subscribe((usagers) => {
      this.USAGERS = usagers;
      this.loadUsers();
    });
  }

  loadUsers() {
    const formArray = this.usersForms;
    this.USAGERS.map((item) => {
      formArray.push(this.createForms(item));
    });
    this.myForm.setControl('users', formArray);
  }

  createForms(user: User): FormGroup {
    let formGroup: FormGroup;
    if (user.dept) {
      formGroup = new FormGroup({
        username: new FormControl(user.username, [Validators.required]),
        pw: new FormControl(user.pw, [Validators.required]),
        lname: new FormControl(user.lname, [Validators.required]),
        fname: new FormControl(user.fname, [Validators.required]),
        role: new FormControl(user.role, [Validators.required]),
        photo: new FormControl(user.photo, [Validators.required]),
        email: new FormControl(user.email, [Validators.required]),
        status: new FormControl(user.status, [Validators.required]),
        dob: new FormControl(user.dob, [Validators.required]),
        tel: new FormControl(user.tel, [Validators.required]),
        dept: new FormControl(user.dept, [Validators.required]),
      });
      this.isEmploye.push(true);
    } else {
      formGroup = new FormGroup({
        username: new FormControl(user.username, [Validators.required]),
        pw: new FormControl(user.pw, [Validators.required]),
        lname: new FormControl(user.lname, [Validators.required]),
        fname: new FormControl(user.fname, [Validators.required]),
        role: new FormControl(user.role, [Validators.required]),
        photo: new FormControl(user.photo, [Validators.required]),
        email: new FormControl(user.email, [Validators.required]),
        status: new FormControl(user.status, [Validators.required]),
      });
      this.isEmploye.push(false);
    }
    this.enModification.push(false);
    this.pwVisible.push('password');
    return formGroup;
  }

  modifier(i: number) {
    this.enModification[i] = true;
    this.canAdd = false;
    //sinon les photo ne chargez que lorsque je clique a quelque part
    this.ref.detectChanges();
  }

  terminer(i: number) {
    this.enModification[i] = false;
    this.canAdd = true;
    this.bdService.postData(
      'etststtstststststststtststs.json',
      this.usersForms.value
    );
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      users: this.fb.array([]),
    });
    this.getUsagers();
  }

  get usersForms() {
    return this.myForm.get('users') as FormArray;
  }

  addUser() {
    const newUser = this.fb.group({
      username: ['', [Validators.required]],
      pw: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      role: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
    this.usersForms.push(newUser);
    this.enModification.push(true);
    this.isEmploye.push(false);
    this.canAdd = false;
    this.pwVisible.push('password');
  }

  setEmploye(i: number) {
    this.isEmploye[i] = true;
    (this.usersForms.at(i) as FormGroup).addControl(
      'dob',
      new FormControl('', [Validators.required])
    );
    (this.usersForms.at(i) as FormGroup).addControl(
      'tel',
      new FormControl('', [Validators.required])
    );
    (this.usersForms.at(i) as FormGroup).addControl(
      'dept',
      new FormControl('', [Validators.required])
    );
  }

  setClient(i: number) {
    this.isEmploye[i] = false;
    (this.usersForms.at(i) as FormGroup).removeControl('dob');
    (this.usersForms.at(i) as FormGroup).removeControl('tel');
    (this.usersForms.at(i) as FormGroup).removeControl('dept');
  }

  deleteUser(i: number) {
    this.usersForms.removeAt(i);
    this.enModification.splice(i, 1);
    this.isEmploye.splice(i, 1);
    this.pwVisible.splice(i, 1);
    this.canAdd = true;
  }

  togglePW(i: number) {
    this.pwVisible[i] = this.pwVisible[i] == 'password' ? 'text' : 'password';
  }

  getPhoto(i: number) {
    return (this.usersForms.at(i) as FormGroup).controls['photo'].value;
  }
}
