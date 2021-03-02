import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {
  comptes:Compte[]|undefined
  clientid:any
  code:any



  constructor(private service:CompteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.clientid=this.route.snapshot.params['clientid'];
    this.code=this.route.snapshot.params['code'];
    this.getCompte();
  }

  private getCompte(){
    return this.service.getCompteList(this.clientid).subscribe(data=>{
      this.comptes=data;
      console.log(data);
    },
    
    );
  
  }

  deleteCompte(id: any){
    this.service.deleteCompte(id).subscribe(data=>{
      console.log(data);
      this.getCompte();
    });
  
  }



  updateCompte(id: any){
    this.router.navigate(['/updateCompte',this.code,this.clientid,id]);
  
  
  
  }

}
