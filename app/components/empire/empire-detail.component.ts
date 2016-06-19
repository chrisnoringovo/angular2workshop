import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteParams } from '@angular/router-deprecated';
import { EmpireService } from './empire.service';
import { Villain } from '../shared/models';

@Component({
   selector : 'empire-detail',
   template : `
    Detail of {{ id }}
    <p>
      Name {{ villain?.name }}
    </p>
    <p>
      Height {{ villain?.height }}
    </p>
     <p>
      Gender {{ villain?.gender }}
    </p>
    <div>
        <a [routerLink]="['Empire']">Home</a> 
    </div>
   `,
   directives : [ ROUTER_DIRECTIVES ] 
})
export class EmpireDetailComponent implements OnInit {
    id:number;
    villain:Villain;
    
    constructor(
        private router:Router,
        private routeParams:RouteParams,
        private empireService:EmpireService
        ){
         
    }
    
    ngOnInit(){
        this.id = parseInt( this.routeParams.get('id'));
        this.empireService.getVillainDetail( this.id ).subscribe( villain => this.villain = villain );
        // load item by id
    }
}