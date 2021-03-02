import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
import { Agence } from './agence';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = "http://localhost:8080/clients";

  constructor(private http:HttpClient) { }

  getClientList():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);

  }
  
  createClient(client:Client):Observable<Object>{
    return this.http.post(this.baseUrl,client);
  }

  getClientById(clientid:any):Observable<Client>{
    return this.http.get<Client>(`${this.baseUrl}/${clientid}`);

  }
  updateClient(clientid:any,client:Client):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${clientid}`,client);
  }

  deleteAgence(clientid:any):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${clientid}`);
  }
  
}
