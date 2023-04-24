import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProduitService } from "src/app/services/produit.service";
import { Produit } from "../models/Produit";
import { Observable } from "rxjs";

@Injectable()
export class ProduitResolver implements Resolve<Produit[]>{

  constructor(private produitService : ProduitService){

  }

  resolve() : Observable<Produit[]> {
    return this.produitService.getProduits();
  }

}
