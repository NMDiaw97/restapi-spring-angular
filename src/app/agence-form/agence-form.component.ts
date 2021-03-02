import { Component, OnInit } from '@angular/core';
import { Agence } from '../agence';
import { AgenceServiceService } from '../agence-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agence-form',
  templateUrl: './agence-form.component.html',
  styleUrls: ['./agence-form.component.css']
})
export class AgenceFormComponent implements OnInit {


  agences: Agence[] | undefined ;
  constructor(private service:AgenceServiceService,
    private router:Router) { }


  ngOnInit(): void {
    
  this.getAgence();

}
private getAgence(){
  this.service.getAgenceList().subscribe(data=>{
    this.agences = data;
    console.log(data);
  });
}
updateAgence(code: any){
  this.router.navigate(['/update-agence',code]);



}

deleteAgence(code: any){
  this.service.deleteAgence(code).subscribe(data=>{
    console.log(data);
    this.getAgence();
  });

}

addCompte(code: any){
  this.router.navigate(['/addCompte',code]);

}
listCompte(code:any){
  this.router.navigate(['/compte',code]);

}


}


