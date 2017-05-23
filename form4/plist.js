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
var service_1 = require('./service');
var plist = (function () {
    function plist(svc) {
        this.svc = svc;
        this.products = [
            { pid: 1, pname: 'p1', date: new Date(2016, 8, 17), price: 60, discount: 0.10 },
            { pid: 2, pname: 'p2', date: new Date(2015, 7, 18), price: 155.25, discount: 0.08 },
            { pid: 3, pname: 'p3', date: new Date(2014, 6, 19), price: 1086.36, discount: 0.09 },
            { pid: 4, pname: 'p4', date: new Date(2013, 5, 11), price: 5051.15, discount: 0.04 },
            { pid: 5, pname: 'p5', date: new Date(2012, 4, 10), price: 1250, discount: 0.06 }
        ];
        this.cur = 'INR';
        this.rate = 1;
    }
    plist.prototype.INR = function () {
        this.rate = 1;
        this.cur = 'INR';
    };
    plist.prototype.USD = function () {
        this.rate = 60;
        this.cur = 'USD';
    };
    plist.prototype.CAD = function () {
        this.rate = 51;
        this.cur = 'CAD';
    };
    plist.prototype.plus = function () {
        console.log(this.svc.plus());
    };
    plist = __decorate([
        core_1.Component({
            selector: 'plist',
            template: "\n    <div class=\"panel-body\">\n    <button class=\"btn btn-default\" (click)='INR()' >Indian</button>\n    <button class=\"btn btn-default \" (click)='USD()'>US</button>\n     <button class=\"btn btn-default \" (click)='CAD()'>CAD</button>\n    <table class =\"table\">\n    \n    <thead>\n    <tr>\n    <td align=\"center\">Pid</td>\n     <td align=\"center\">Pname</td>\n      <td align=\"center\">date</td>\n       <td align=\"center\">price</td>\n        <td align=\"center\">Discount</td>\n        <td align=\"center\">After Discount</td>\n    </tr>\n    </thead>\n    <tr *ngFor=\"let p of products\">\n    <td align=\"center\">{{p.pid}}</td>\n     <td align=\"center\">{{p.pname}}</td>\n      <td align=\"center\">{{p.date | date:'medium'}}</td>\n       <td align=\"center\">{{p.price/rate | currency:cur:true}}</td>\n        <td align=\"center\">{{p.discount | percent}}</td>\n         <td align=\"center\">{{p.price/rate | dp:p.discount | currency:cur:true}}</td>\n    </tr>\n    </table>\n    </div>\n    <button class=\"btn btn-default\" (click)='plus()'>Plist button</button>\n    "
        }), 
        __metadata('design:paramtypes', [service_1.service])
    ], plist);
    return plist;
}());
exports.plist = plist;
//# sourceMappingURL=plist.js.map