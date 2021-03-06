import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';

@Component({
    selector: 'login',
    template : `
    <div id="login">
        <div>
            <input type="text" [(value)]="username"  >
        </div> 
        <div>
            <input type="password" [(value)]="password"  >
        </div>    
        <div>
            <input type="submit" value="Login" (click)="login()" >
        </div>
    </div>
    `
})
export class LoginComponent {
    username:string;
    password:string;
    
    constructor(private router:Router) {
        this.username = '';
        this.password = '';
    }
    
    login() {
        // TODO call login service
        this.router.navigate(['/Home', {}]);
    }
}