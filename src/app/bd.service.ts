import { Injectable } from '@angular/core';
import produits from '../assets/data/produits.json';
import { Observable, of } from 'rxjs';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BdService {
  private lstPanier: string[] = [];

  getData(filename: string): Observable<any[]> {
    let url: string =
      'http://localhost:3000/getjson?f=./../src/assets/data/' + filename;
    return this.http.get<any[]>(url, { responseType: 'json' });

    //Si tpapp est configurer comme indique dans le README tout
    //devrait fonctionner, sinon commenter les lignes ci-haut et
    //de-commenter celle d'en bas, alors il n'y aura pas d'appel http
    //mais l'application va fonctionner

    //return of(produits);
  }

  postData(filename: string, data: any[]) {}

  updateProduits() {
    //Methode inutile et redondante
    //De plus ce n'est pas pratique d'avoir a aller dans le panier
    //pour enlever un produit, au lieu de pouvoir le retirer du panier
    //sur la meme page ou il a ete ajoute.
  }

  getProduits(): Observable<Produit[]> {
    return this.getData('produits.json');
  }

  getPanier(): Observable<Produit[]> {
    let panier: Produit[] = [];
    this.getProduits().subscribe(
      (produits) =>
        (panier = produits.filter(
          (produit) => this.getlstPanier().indexOf(produit.pki.toString()) != -1
        ))
    );
    return of(panier);
  }

  togglePanier(pki: string) {
    let index = this.lstPanier.indexOf(pki);
    if (index == -1) {
      this.lstPanier.push(pki);
    } else {
      this.lstPanier.splice(index, 1);
    }
  }

  getlstPanier(): string[] {
    return this.lstPanier;
  }

  constructor(private http: HttpClient) {}
}
