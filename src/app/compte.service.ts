import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from './compte';
import { Observable } from 'rxjs';
import { Agence } from './agence';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = "http://localhost:8080/agences";
  private baseUrl2="http://localhost:8080/clients";
  private baseUrl3="http://localhost:8080/comptes";

  constructor(private http:HttpClient) { }

  createCompte(code:any,clientid:any,compte:Compte):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${code}/${clientid}/comptes`,compte);
  }


  getCompteList(clientid:Client):Observable<Compte[]>{
    return this.http.get<Compte[]>(`${this.baseUrl2}/${clientid}/comptes`);

  }
  
  

  getCompteById(code:Agence,clientid:any,id:any):Observable<Compte>{
    return this.http.get<Compte>(`${this.baseUrl}/${code}/${clientid}/${id}`);

  }
  updateCompte(code:any,clientid:any,id:any,compte:Compte):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${code}/${clientid}/comptes/${id}`,compte);
  }

  deleteCompte(id:any):Observable<Object>{
    return this.http.delete(`${this.baseUrl3}/${id}`);
  }
  
}
