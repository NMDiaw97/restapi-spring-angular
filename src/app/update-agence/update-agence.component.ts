import { Component, OnInit } from '@angular/core';
import { Agence } from '../agence';
import { AgenceServiceService } from '../agence-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.css']
})
export class UpdateAgenceComponent implements OnInit {
  agence:Agence = new Agence();
  code:any
  constructor(private service:AgenceServiceService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['code'];
    this.service.getAgenceById(this.code).subscribe(data=>{
      this.agence=data;
    },
    error=>console.log(error));
  }

  public onSubmit(){
    this.service.updateAgence(this.code,this.agence).subscribe(data=>{
      this.goToAgenceList();
    },
    error=>console.log(error));
  }
  goToAgenceList(){
    this.router.navigate(['/agences']);
  }

}
