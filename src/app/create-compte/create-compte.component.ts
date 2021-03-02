import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  compte:Compte= new Compte();
  code:any
  clientid:any

  constructor(private service:CompteService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['code'];
    this.clientid=this.route.snapshot.params['clientid'];
  }

  saveCompte(){
    this.service.createCompte(this.code,this.clientid,this.compte).subscribe(data=>{
      console.log(data);
      this.goToCompteList();
    },
    error=>console.log(error));
    
  }


  onSubmit(){
    this.saveCompte();

  }
  goToCompteList(){
    this.router.navigate(['/listCompte',this.code,this.clientid]);
  }

}
