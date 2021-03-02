import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agence } from '../agence';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients:Client[] | undefined
  code:any

  constructor(private service:ClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['code'];
    this.getClient();
  }
private getClient(){
  return this.service.getClientList().subscribe(data=>{
    this.clients=data;
    console.log(data);
  },
  
  );

  
}


deleteClient(id: any){
  this.service.deleteAgence(id).subscribe(data=>{
    console.log(data);
    this.getClient();
  });

}
updateClient(clientid:  any){
  this.router.navigate(['/update-client',clientid]);



}

addCompte(clientid:number|undefined){
  
  this.router.navigate(['/addCompte',this.code,clientid]);

}

listCompte(clientid:number|undefined){
  this.router.navigate(['/listCompte',this.code,clientid]);
}

}
