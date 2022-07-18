import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { BdService } from '../bd.service';
import { Produit } from '../produit';
import { User } from '../user';

@Component({
  selector: 'app-panier-component',
  templateUrl: './panier-component.component.html',
  styleUrls: ['./panier-component.component.css'],
})
export class PanierComponentComponent implements OnInit {
  get getTotal(): number {
    let total = this.getProduitsPanier.reduce((accumulator, object) => {
      return accumulator + object.prix;
    }, 0);
    return total;
  }

  currentLoggedIn: User | '' = this.authService.getCurrentLoggedIn();

  get getProduitsPanier(): Produit[] {
    return this.bdService.getPanier();
  }

  constructor(
    private bdService: BdService,
    private authService: AuthentificationService
  ) {}

  ngOnInit(): void {}
}
