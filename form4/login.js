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
var login = (function () {
    function login(svc) {
        this.svc = svc;
        this.bcolor = 'blue';
        this.con = true;
        this.hii = 'hii';
        this.title = 'LoginComponent';
        this.users = [
            { users: 'romil', password: 123 },
            { users: 'Sikka', password: 1452 },
            { users: 'tikka', password: 1445452 }
        ];
    }
    login.prototype.changetitle = function () {
        this.title = this.title == 'LoginComponent' ? 'Login component Changed' : 'LoginComponent';
    };
    login.prototype.checkuser = function () {
        if (this.user == 'romil' && this.password == 'romil') {
            this.result = true;
        }
        else {
            this.result = false;
        }
    };
    login.prototype.plus = function () {
        console.log(this.svc.plus());
    };
    login.prototype.blue = function () {
        this.bcolor = this.bcolor == 'blue' ? 'red' : 'blue';
    };
    login.prototype.change = function () {
        this.hi = this.hii;
        this.con = false;
    };
    login.prototype.save = function () {
        this.hii = this.hi;
        this.con = true;
    };
    login.prototype.cancel = function () {
        this.con = true;
        this.hi = null;
    };
    login = __decorate([
        core_1.Component({
            selector: 'login',
            template: " <div class='container-fluid'>\n            <div class='panel panel-danger'>\n                <div class='panel-heading'>\n                    <h4 align='center'>{{title}}</h4>\n                    <button class='btn btn-default' (click)='changetitle()'>Change Title</button>\n                   </div>\n                   <div class=\"panel-body\">\n                   <p>\n                   Username <input type=\"text\" [(ngModel)]=\"user\"/>\n                   <span> Username typed is {{user}}</span>\n                   </p>\n                    <p>\n                   password <input type=\"password\" [(ngModel)]=\"password\"/>\n                    <span> Username typed is {{password}}</span>\n                   </p>\n                   <button class=\"btn btn-primary\" (click)='checkuser()'>Click</button>\n                   <h1 *ngIf=\"result==true\">Login Success</h1>\n                   <h2 *ngIf=\"result==false\">Login Failed</h2>\n                   <ol>\n                   <li High bcolor={{bcolor}} *ngFor= \"let u of users\">\n                    Username is {{u.user}} password is {{u.password}}\n                   </li>\n                   </ol>\n                   </div>\n                   <button class=\"btn btn-default\" (click)='plus()'>Login button</button>\n                   <button class=\"btn btn-default\" (click)='blue()'>Blue button</button>\n                  \n                   <h1 *ngIf=con>{{hii}}</h1> <button *ngIf=con class=\"btn btn-default\" (click)='change()'>Change text</button>\n                   <input *ngIf!=con type = \"text\" [(ngModel)]=\"hi\"/><h2 *ngIf!=con>{{hi}}</h2>\n                   <button *ngIf!=con class=\"btn btn-default\" (click)='save()'>Save</button>\n                   <button *ngIf!=con class=\"btn btn-default\" (click)='cancel()'>Cancel</button>\n                   "
        }), 
        __metadata('design:paramtypes', [service_1.service])
    ], login);
    return login;
}());
exports.login = login;
//# sourceMappingURL=login.js.map