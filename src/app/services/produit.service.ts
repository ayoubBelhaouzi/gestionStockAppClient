import { Injectable } from '@angular/core';
import { Produit } from '../commun/models/Produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../conf/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  readonly PRODUITS : Produit[]= [];

  constructor(private http:HttpClient) {

   }

   public getProduits() : Observable<Produit[]>{
    return this.http.get<Produit[]>(API_URLS.PRODUITS_URLS);
   }

   public addProduit(p : Produit):Observable<any> {
    return this.http.post(API_URLS.PRODUITS_URLS_ADD,p);
   }

   public updateProduit(p : Produit):Observable<any> {
    return this.http.put(API_URLS.PRODUITS_URLS_UPDATE,p);
   }

   public deleteProduit(id:number):Observable<any> {
    return this.http.delete(API_URLS.PRODUITS_URLS_REMOVE+"/"+id);
   }
}
