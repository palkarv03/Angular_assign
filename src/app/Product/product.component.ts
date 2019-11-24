import {Component,Input, Output,EventEmitter} from "@angular/core";
import { Iproduct } from '../shared/model/product';
@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
 })
 export class ProductComponent{
     @Input() ProductDetails:Iproduct;
     @Output() newProduct = new EventEmitter<Iproduct>(); 
     public imgurl="../../assets/img/pexels-photo-853199.jpeg";

     constructor(){}
     AddProduct(name:string,price:number,rating:number){
        this.newProduct.emit({name:name,price:price,rating:rating,imgUrl:this.imgurl});
     }
     

 }
