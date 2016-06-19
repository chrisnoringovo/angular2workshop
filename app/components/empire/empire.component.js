"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var empire_service_1 = require('./empire.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var user_service_1 = require('../shared/user.service');
var planets_component_1 = require('../planets/planets.component');
var EmpireComponent = (function () {
    function EmpireComponent(empireService, userService, router) {
        this.empireService = empireService;
        this.userService = userService;
        this.router = router;
    }
    EmpireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            var found = user.roles.find(function (x) { return x == 'Administrator'; });
            if (!found) {
                //route to home
                _this.router.navigate(['/Login', {}]);
            }
            console.log('new user');
            // if user has changed, either stay or route from here 
        });
        this.empireService.getVillainsFromApi()
            .subscribe(function (villains) {
            _this.villains = villains;
        }, function (error) {
            console.log(error);
        });
    };
    EmpireComponent.prototype.assign = function (villain) {
        // open modal
        console.log(villain);
    };
    EmpireComponent = __decorate([
        core_1.Component({
            selector: 'empire',
            template: "\n   <div id='empire'>\n    <h2>Empire</h2>\n    <div class='data-row' *ngFor=\"let villain of villains; let i = index\">\n       {{ villain.name }} {{ villain.assignedPlanet }}  <span class='assign' [hidden]='villain.assignedPlanet' (click)='assign(villain)'>assign</span> <a [routerLink]=\"['EmpireDetail',{id : i +1 }]\">Detail</a> \n    </div> \n    <planets></planets>\n    <div>\n        <a [routerLink]=\"['Home']\">Home</a> \n    </div>\n   </div>\n  ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                planets_component_1.PlanetsComponent
            ]
        }), 
        __metadata('design:paramtypes', [empire_service_1.EmpireService, user_service_1.UserService, router_deprecated_1.Router])
    ], EmpireComponent);
    return EmpireComponent;
}());
exports.EmpireComponent = EmpireComponent;
//# sourceMappingURL=empire.component.js.map