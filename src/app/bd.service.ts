import { Injectable } from '@angular/core';
import produits from '../assets/data/produits.json';
import users from '../assets/data/usagers.json';
import { Observable, of } from 'rxjs';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class BdService {
  lstPanier: string[] = [];
  panier: Produit[] = [];

  getData(filename: string): Observable<any[]> {
    let url: string =
      'http://localhost:3000/getjson?f=./../src/assets/data/' + filename;
    return this.http.get<any[]>(url, { responseType: 'json' });

    //Si tpapp est configurer comme indique dans le README tout
    //devrait fonctionner, sinon commenter les lignes ci-haut et
    //de-commenter celle d'en bas, alors il n'y aura pas d'appel http
    //mais l'application va fonctionner

    // if (filename === 'produits.json') {
    //   return of(produits);
    // } else {
    //   return of(users);
    // }
  }

  postData(filename: string, data: any) {
    let posturl: string = 'http://localhost:3000/postjson';
    const params = {
      data: JSON.stringify(data),
      file: filename,
    };
    return this.http.post<any>(posturl, params);
  }

  updateProduits(): void {
    this.getProduits().subscribe((produits) => {
      this.panier = produits.filter(
        (produit) => this.lstPanier.indexOf(produit.pki.toString()) != -1
      );
    });
  }

  getProduits(): Observable<Produit[]> {
    return this.getData('produits.json');
  }

  getUsagers(): Observable<User[]> {
    return this.getData('usagers.json');
  }

  getPanier(): Produit[] {
    return this.panier;
  }

  togglePanier(pki: string) {
    let index = this.lstPanier.indexOf(pki);
    if (index == -1) {
      this.lstPanier.push(pki);
    } else {
      this.lstPanier.splice(index, 1);
    }
    this.updateProduits();
  }

  constructor(private http: HttpClient) {}
}
