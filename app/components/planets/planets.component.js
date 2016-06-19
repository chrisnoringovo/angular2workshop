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
// resp for showing planets and their assigned people
var core_1 = require('@angular/core');
var planets_service_1 = require('./planets.service');
var PlanetsComponent = (function () {
    function PlanetsComponent(planetsService) {
        this.planetsService = planetsService;
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planetsService.getPlanets().subscribe(function (planets) { return _this.planets = planets; });
    };
    PlanetsComponent = __decorate([
        core_1.Component({
            selector: 'planets',
            template: "\n        <div>\n            <h2>Planets</h2>\n            <div class='data-row' *ngFor='let planet of planets' >\n             {{ planet.name }}\n            </div>\n        </div>\n        \n    "
        }), 
        __metadata('design:paramtypes', [planets_service_1.PlanetsService])
    ], PlanetsComponent);
    return PlanetsComponent;
}());
exports.PlanetsComponent = PlanetsComponent;
//# sourceMappingURL=planets.component.js.map