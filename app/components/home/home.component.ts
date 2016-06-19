import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
    selector: 'home',
    template : `
        <div [class]='sideSelected'>{{description}}</div>
        <div [class]='sideSelected'>
          <div class='side light' >
            <a [routerLink]="['RebelAlliance']">Rebel alliance</a>
          </div>
          <div  class='side dark' >
            <a [routerLink]="['Empire']">Empire</a>
          </div>
        </div>
    `,
    directives: [
       ROUTER_DIRECTIVES
   ]
    
})
export class HomeComponent implements OnInit {
    description:string;
    sideSelected:string;
    
    constructor(private router:Router) {
        this.description = 'Choose side';
    }
    
    ngOnInit(){
        this.router.subscribe( currentUrl => {
          this.sideSelected = 'hide';  
        });   
    }
}