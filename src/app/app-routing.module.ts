import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitResolver } from './commun/resolvers/produit.resolver';

const routes: Routes = [
  {path : "produit", component : ProduitComponent},
  {path : "dashboard", component : DashboardComponent},
  {path : "", component : DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
