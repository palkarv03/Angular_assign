import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'prohhtp'
})

export class ProPipe implements PipeTransform{
    transform(val, arg, imgValue:boolean=false){
        if(arg===undefined){
            return val;
        }
        if(arg != undefined){
            return val.replace('http','https');
        }
    }
}
