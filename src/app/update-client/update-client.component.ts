import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  client:Client = new Client();
  clientid:any

  constructor(private service:ClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.clientid=this.route.snapshot.params['clientid'];
    this.service.getClientById(this.clientid).subscribe(data=>{
      this.client=data;
      console.log(data);

    });
    
  }
  public onSubmit(){
    this.service.updateClient(this.clientid,this.client).subscribe(data=>{
      this.goToClientList();
    },
   );
  }
  goToClientList(){
    this.router.navigate(['/clients']);
  }
  
}
