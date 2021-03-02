import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../compte';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
  compte:Compte =  new Compte()
  id:any
  code:any
  clientid:any

  constructor(private service:CompteService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['code'];
    this.clientid=this.route.snapshot.params['clientid'];
    this.id=this.route.snapshot.params['id'];
    this.service.getCompteById(this.code,this.clientid,this.id).subscribe(data=>{
      this.compte=data;

    })
    
  }

  public onSubmit(){
    this.service.updateCompte(this.code,this.clientid,this.id,this.compte).subscribe(data=>{
      this.goToCompteList();
    },
    error=>console.log(error));
  }
  goToCompteList(){
    this.router.navigate(['/listCompte',this.code,this.clientid]);
  }
}
