import {Component} from '@angular/core';
import {service} from './service';

@Component({
    selector:'login',
    template:` <div class='container-fluid'>
            <div class='panel panel-danger'>
                <div class='panel-heading'>
                    <h4 align='center'>{{title}}</h4>
                    <button class='btn btn-default' (click)='changetitle()'>Change Title</button>
                   </div>
                   <div class="panel-body">
                   <p>
                   Username <input type="text" [(ngModel)]="user"/>
                   <span> Username typed is {{user}}</span>
                   </p>
                    <p>
                   password <input type="password" [(ngModel)]="password"/>
                    <span> Username typed is {{password}}</span>
                   </p>
                   <button class="btn btn-primary" (click)='checkuser()'>Click</button>
                   <h1 *ngIf="result==true">Login Success</h1>
                   <h2 *ngIf="result==false">Login Failed</h2>
                   <ol>
                   <li High bcolor={{bcolor}} *ngFor= "let u of users">
                    Username is {{u.user}} password is {{u.password}}
                   </li>
                   </ol>
                   </div>
                   <button class="btn btn-default" (click)='plus()'>Login button</button>
                   <button class="btn btn-default" (click)='blue()'>Blue button</button>
                  
                   <h1 *ngIf=con>{{hii}}</h1> <button *ngIf=con class="btn btn-default" (click)='change()'>Change text</button>
                   <input *ngIf!=con type = "text" [(ngModel)]="hi"/><h2 *ngIf!=con>{{hi}}</h2>
                   <button *ngIf!=con class="btn btn-default" (click)='save()'>Save</button>
                   <button *ngIf!=con class="btn btn-default" (click)='cancel()'>Cancel</button>
                   `
                    
                    
})
export class login{
    public bcolor:string = 'blue';
    public con:boolean = true;
    public hii:string='hii';
    public hi:string;
    
    constructor(private svc:service){

    }
    public title:string = 'LoginComponent' ;
    public user:string;
    public password:any;
    public result:boolean;
    public users = [
      {users:'romil',password:123},
      {users:'Sikka',password:1452},
      {users:'tikka',password:1445452}
 ];
    public changetitle():void{
        this.title = this.title=='LoginComponent' ? 'Login component Changed' : 'LoginComponent';
    }
    public checkuser():void{
         if(this.user=='romil' && this.password=='romil'){
             this.result = true;
         }
         else{
             this.result = false;
         }
    }

    public plus():void{
        console.log(this.svc.plus());
    }
    public blue(){
        this.bcolor = this.bcolor== 'blue' ? 'red' : 'blue'; 
    }
    public change(){
        this.hi = this.hii;
        this.con = false;
    }
     public save(){
         this.hii = this.hi;
        this.con = true;
    }
     public cancel(){
         this.con = true;
         this.hi = null;
       
        
    }

   
}