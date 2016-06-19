import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';

import { RebelAllianceComponent } from './components/rebel-alliance/rebel-alliance.component';
import { EmpireComponent } from './components/empire/empire.component';
import { EmpireDetailComponent } from './components/empire/empire-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


import { EmpireService } from './components/empire/empire.service';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';
import { UserService, User } from './components/shared/user.service';
import { BaseClient } from './components/shared/base-client.service';
import { PlanetsService } from './components/planets/planets.service';

@Component({
  selector: 'my-app',
  template: `
    <div class='center-container'>
       <h1>{{title}}</h1>
        <button (click)='setUser()' >Set user</button>
        <router-outlet></router-outlet>
    </div> 
    
  `,
   directives: [
       ROUTER_DIRECTIVES
   ],
   providers: [
     ROUTER_PROVIDERS,
     HTTP_PROVIDERS,
     EmpireService,
     UserService,
     PlanetsService,
     BaseClient
   ]
})
@RouteConfig([
  {
    path: '/rebels',
    name: 'RebelAlliance',
    component: RebelAllianceComponent,
  },
  {
    path: '/empire',
    name: 'Empire',
    component: EmpireComponent
  },
  {
      path : '/empire/:id',
      name: 'EmpireDetail',
      component: EmpireDetailComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
      path: '/login',
      name: 'Login',
      component : LoginComponent
  }
])
export class AppComponent implements OnInit  { 
    title:string;
    
    constructor(private router:Router, private userService:UserService) {
        this.title = 'Star Wars Battle planning system';
    }
    
    setUser() {
        var user = new User('Normal user','Normal');
       
        this.userService.setUser( user );
    }
    
    ngOnInit(){
        this.router.navigate(['/Login', {}]);
    }
    
    
}