import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenceFormComponent } from './agence-form/agence-form.component';
import { CreateAgenceComponent } from './create-agence/create-agence.component';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
const routes: Routes = [
  {path:"",redirectTo:"agences",pathMatch:"full"},
  {path:"agences",component:AgenceFormComponent},
  {path:"create-agence",component:CreateAgenceComponent},
  {path:"update-agence/:code",component:UpdateAgenceComponent},
  {path:"clients",component:ClientListComponent},
  {path:"create-client",component:CreateClientComponent},
  {path:"update-client/:clientid",component:UpdateClientComponent},
  {path:"addCompte/:code",component:ClientListComponent},
  {path:"addCompte/:code/:clientid",component:CreateCompteComponent},
  {path:"addCompte/:code/",component:ClientListComponent},
  {path:"listCompte/:code/:clientid",component:CompteListComponent},
  {path:"updateCompte/:code/:clientid/:id",component:UpdateCompteComponent},





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
