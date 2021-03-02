import { Component, OnInit } from '@angular/core';
import { Agence } from '../agence';
import { AgenceServiceService } from '../agence-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agence',
  templateUrl: './create-agence.component.html',
  styleUrls: ['./create-agence.component.css']
})
export class CreateAgenceComponent implements OnInit {
  agence: Agence = new Agence();

  constructor(private service:AgenceServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveAgence(){
    this.service.createAgence(this.agence).subscribe(data=>{
      console.log(data);
      this.goToAgenceList();
    },
    error=>console.log(error));
    
  }

  goToAgenceList(){
    this.router.navigate(['/agences']);
  }

  public onSubmit(){
    console.log(this.agence); 
    this.saveAgence();
  }

}
