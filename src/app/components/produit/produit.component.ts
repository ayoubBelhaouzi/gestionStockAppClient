import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/commun/models/Produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits!: Produit[];

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduits();
  }



}
