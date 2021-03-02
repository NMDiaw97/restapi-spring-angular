import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AgenceFormComponent } from './agence-form/agence-form.component';
import { CreateAgenceComponent } from './create-agence/create-agence.component';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';


@NgModule({
  declarations: [
    AppComponent,
    AgenceFormComponent,
    CreateAgenceComponent,
    UpdateAgenceComponent,
    ClientListComponent,
    CreateClientComponent,
    UpdateClientComponent,
    CreateCompteComponent,
    CompteListComponent,
    UpdateCompteComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
