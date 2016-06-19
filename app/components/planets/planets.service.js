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
var base_client_service_1 = require('../shared/base-client.service');
var PlanetsService = (function () {
    function PlanetsService(baseClient) {
        this.baseClient = baseClient;
    }
    PlanetsService.prototype.getPlanets = function () {
        var me = this;
        return this.baseClient
            .get('/planets')
            .map(function (response) {
            var body = response.json();
            me.planets = body.results;
            return body.results;
        });
    };
    PlanetsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [base_client_service_1.BaseClient])
    ], PlanetsService);
    return PlanetsService;
}());
exports.PlanetsService = PlanetsService;
//# sourceMappingURL=planets.service.js.map