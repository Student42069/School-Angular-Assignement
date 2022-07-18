import { Component, Input, OnInit } from '@angular/core';
import { BdService } from '../bd.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-produits-component',
  templateUrl: './produits-component.component.html',
  styleUrls: ['./produits-component.component.css'],
})
export class ProduitsComponentComponent implements OnInit {
  @Input('cat') cat: string = '';
  produits: Produit[] = [];

  getProduits(): void {
    this.bdService
      .getProduits()
      .subscribe((produits) => (this.produits = produits));
  }

  constructor(private bdService: BdService) {}

  ngOnInit(): void {
    this.getProduits();
  }
}
