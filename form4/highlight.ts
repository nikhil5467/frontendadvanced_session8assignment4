import {Directive} from '@angular/core';
import {ElementRef} from '@angular/core';
import {Input} from '@angular/core';

@Directive({
      selector:'[High]'

})

export class highlight{
    @Input()
    public bcolor:string;
    constructor( private e:ElementRef){
        console.log('Highlight constructor called');
        console.log(e.nativeElement);
       this.e.nativeElement.style.color = this.bcolor;
    }
    
     ngOnChanges(){
 this.e.nativeElement.style.color = this.bcolor;
     }
}