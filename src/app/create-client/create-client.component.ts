import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
client:Client = new Client();

  constructor(private service:ClientService,private router:Router) { }

  ngOnInit(): void {
  }
  saveClient(){
    this.service.createClient(this.client).subscribe(data=>{
      console.log(data);
      this.goToClientList();
    },
    error=>console.log(error));
    
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }

  public onSubmit(){
    console.log(this.client); 
    this.saveClient();
  }

}
