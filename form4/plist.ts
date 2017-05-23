import {Component} from '@angular/core';
import {service} from './service';
@Component({
    selector:'plist',
    template:`
    <div class="panel-body">
    <button class="btn btn-default" (click)='INR()' >Indian</button>
    <button class="btn btn-default " (click)='USD()'>US</button>
     <button class="btn btn-default " (click)='CAD()'>CAD</button>
    <table class ="table">
    
    <thead>
    <tr>
    <td align="center">Pid</td>
     <td align="center">Pname</td>
      <td align="center">date</td>
       <td align="center">price</td>
        <td align="center">Discount</td>
        <td align="center">After Discount</td>
    </tr>
    </thead>
    <tr *ngFor="let p of products">
    <td align="center">{{p.pid}}</td>
     <td align="center">{{p.pname}}</td>
      <td align="center">{{p.date | date:'medium'}}</td>
       <td align="center">{{p.price/rate | currency:cur:true}}</td>
        <td align="center">{{p.discount | percent}}</td>
         <td align="center">{{p.price/rate | dp:p.discount | currency:cur:true}}</td>
    </tr>
    </table>
    </div>
    <button class="btn btn-default" (click)='plus()'>Plist button</button>
    `
})

export class plist{
    constructor(private svc:service){

    }
public products:any = [
{pid:1,pname:'p1',date:new Date(2016,8,17),price:60,discount:0.10},
{pid:2,pname:'p2',date:new Date(2015,7,18),price:155.25,discount:0.08},
{pid:3,pname:'p3',date:new Date(2014,6,19),price:1086.36,discount:0.09},
{pid:4,pname:'p4',date:new Date(2013,5,11),price:5051.15,discount:0.04},
{pid:5,pname:'p5',date:new Date(2012,4,10),price:1250,discount:0.06}
];
public cur:string = 'INR';
public rate:number = 1;
public INR():void{
this.rate = 1;
this.cur = 'INR';
}
public USD():void{
    this.rate = 60;
this.cur = 'USD';
}
public CAD():void{
    this.rate = 51;
this.cur = 'CAD';
}

public plus(){
        console.log(this.svc.plus());
    }
}