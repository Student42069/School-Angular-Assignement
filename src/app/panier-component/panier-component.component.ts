import { Component, OnInit } from '@angular/core';
import { BdService } from '../bd.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-panier-component',
  templateUrl: './panier-component.component.html',
  styleUrls: ['./panier-component.component.css'],
})
export class PanierComponentComponent implements OnInit {
  panier: Produit[] = [];

  getPanier(): void {
    this.bdService
      .getPanier()
      .subscribe((produits) => (this.panier = produits));
  }

  constructor(private bdService: BdService) {}

  ngOnInit(): void {
    this.getPanier();
  }
}
