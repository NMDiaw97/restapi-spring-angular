import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agence } from './agence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceServiceService {
  private baseUrl = "http://localhost:8080/agences";

  constructor(private http:HttpClient) { 
   
  }
  getAgenceList():Observable<Agence[]>{
    return this.http.get<Agence[]>(this.baseUrl);

  }
  createAgence(agence:Agence):Observable<Object>{
    return this.http.post(this.baseUrl,agence);
  }

  getAgenceById(code:any):Observable<Agence>{
    return this.http.get<Agence>(`${this.baseUrl}/${code}`);

  }
  updateAgence(code:any,agence:Agence):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${code}`,agence);
  }

  deleteAgence(code:any):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${code}`);
  }

}
