import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { Produit } from 'src/app/commun/models/Produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits!: Produit[];

  produitForm! : FormGroup;

  operation:string = 'add';

  selectedProduit! : Produit;

  constructor(private produitService : ProduitService, private fb : FormBuilder, private route : ActivatedRoute) {
    this.createForm();
   }

  ngOnInit(): void {
    this.loadProduits();
    this.initProduit();
  }

  addProduit() {
    const p = this.produitForm.value;
    if(p.ref){
      this.produitService.addProduit(p).subscribe(
        res => {this.loadProduits()}
      )
    }
    console.log(this.produitForm.value);
  }

  updateProduit(){
    const p = this.produitForm.value;
    this.produitService.updateProduit(p).subscribe(
      res => {this.loadProduits()}
    )
    console.log(this.produitForm.value);
  }

  removeProduit(){
    const p = this.produitForm.value;
     this.produitService.deleteProduit(p.id).subscribe(
      res => {this.loadProduits()}
    );
  }

  removeProduitById(id:any){
     this.produitService.deleteProduit(id).subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduits()}
    );
  }

  loadProduits(){
    this.produitService.getProduits().subscribe(
      next => {this.produits = next},
      error => console.log(error),
      () => {console.log("loading produit was done")}
    );
  }

  initProduit(){
    this.selectedProduit = new Produit();
  }

  createForm(){
    this.produitForm = this.fb.group({
      id : '',
      ref : ['',Validators.required],
      quantite : '',
      prixUnitaire : ''
    });
  }
}
