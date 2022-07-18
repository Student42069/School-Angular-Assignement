import { Component, OnInit } from '@angular/core';
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
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  myForm!: FormGroup;
  USAGERS: User[] = [];
  enModification: boolean[] = [];
  isEmploye: boolean[] = [];
  canAdd: boolean = true;
  pwVisible: string[] = [];

  constructor(
    private fb: FormBuilder,
    private bdService: BdService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      users: this.fb.array([]),
    });
    this.getUsagers();
  }

  //Pour recuperer les usagers du fichier json
  getUsagers(): void {
    this.bdService.getUsagers().subscribe((usagers) => {
      this.USAGERS = usagers;
      this.loadUsers();
    });
  }

  //Pour charger dans les formulaire les usagers deja existants
  loadUsers() {
    const formArray = this.usersForms;
    this.USAGERS.map((item) => {
      formArray.push(this.createForms(item));
    });
    this.myForm.setControl('users', formArray);
  }

  //Pour cree le formulaire associe a chaque usager DEJA existant
  createForms(user: User): FormGroup {
    let formGroup: FormGroup;
    //Si employe
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
      //Si client
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

  //Appeler lorsquon clique sur un bouton modifie
  modifier(i: number) {
    this.enModification[i] = true;
    this.canAdd = false;
    //sinon les photo ne chargez que lorsque je clique a quelque part
    this.ref.detectChanges();
  }

  //Appelle lorsquon clique sur terminer
  terminer(i: number) {
    this.enModification[i] = false;
    this.canAdd = true;
    this.save();
  }

  //Appeller a chaque fois qu'on clique sur terminer
  //pour sauvgarder les usagers avec POST
  save() {
    let savestatus: any;
    let datatosave = this.usersForms.getRawValue();
    let filename = './../src/assets/data/usagers.json';

    let obs = this.bdService
      .postData(filename, datatosave)
      .subscribe((data: any) => (savestatus = data));
    setTimeout(() => {
      console.log(savestatus);
      // this.getUsagers();
    }, 1000);
  }

  //Ajouter un usager vide
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

  //Si role est employe on rajoute 3 form control a l'usager
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

  //Si cest un client on enleve les 3 formcontrols
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

  //Renvoie si tout les username sont uniques
  get isUnique(): boolean {
    const unique = [
      ...new Set(
        this.usersForms.getRawValue().map((user: User) => user.username)
      ),
    ];
    return unique.length == this.usersForms.getRawValue().length;
  }

  //Pour le texte du bouton afficher cacher mot de passe
  togglePW(i: number) {
    this.pwVisible[i] = this.pwVisible[i] == 'password' ? 'text' : 'password';
  }

  //Pour afficher remarque que le lien de la photo est bien enrigistrer
  //mais dans le formulaire il nest pas affiche, je nai pas reussi a regler le probleme
  //mais un message est affiche (title)
  getPhoto(i: number) {
    return (this.usersForms.at(i) as FormGroup).controls['photo'].value;
  }

  get usersForms() {
    return this.myForm.get('users') as FormArray;
  }

  //Retourne vrai si aucun usager nest en modification/creation
  //Faux sinon
  get canItAdd(): boolean {
    return !this.canAdd;
  }
}
