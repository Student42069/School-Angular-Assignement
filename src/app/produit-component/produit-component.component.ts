import { Component, OnInit, Input } from '@angular/core';
import { BdService } from '../bd.service';
import { Produit } from '../produit';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit-component',
  templateUrl: './produit-component.component.html',
  styleUrls: ['./produit-component.component.css'],
})
export class ProduitComponentComponent implements OnInit {
  @Input('article') article!: Produit;
  @Output() newItemEvent = new EventEmitter<string>();
  textePanier = 'Ajouter au panier';

  updatePanier() {
    this.newItemEvent.emit();
  }

  addCart() {
    this.bdService.togglePanier(this.article.pki.toString());
    this.btnTextToggle();
    this.updatePanier();
  }

  btnTextToggle() {
    if (
      this.bdService.getlstPanier().indexOf(this.article.pki.toString()) == -1
    ) {
      this.textePanier = 'Ajouter au panier';
    } else {
      this.textePanier = 'Retirer du panier';
    }
  }

  constructor(private bdService: BdService) {}

  ngOnInit(): void {
    this.btnTextToggle();
  }
}
