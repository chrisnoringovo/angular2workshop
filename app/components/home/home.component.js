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
var router_deprecated_1 = require('@angular/router-deprecated');
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.description = 'Choose side';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.subscribe(function (currentUrl) {
            _this.sideSelected = 'hide';
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n        <div [class]='sideSelected'>{{description}}</div>\n        <div [class]='sideSelected'>\n          <div class='side light' >\n            <a [routerLink]=\"['RebelAlliance']\">Rebel alliance</a>\n          </div>\n          <div  class='side dark' >\n            <a [routerLink]=\"['Empire']\">Empire</a>\n          </div>\n        </div>\n    ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map