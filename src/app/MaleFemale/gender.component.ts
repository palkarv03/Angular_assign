import {Component} from "@angular/core";
import { Iproduct } from '../shared/model/product';
@Component({
    selector:'app-gender',
    templateUrl:'./gender.component.html'
    
})
export class GenderComponent{
    public user="string";
    
public MaleInfo = {
    name : 'Kurt',
    imgUrl:'../../assets/img/pexels-photo-1367192.jpeg'
    }
public FemaleInfo = {
    name : 'Jane',
    imgUrl:'../../assets/img/pexels-photo-1402787.jpeg'
}



    constructor(){};
    public productInfo:Iproduct[]=[{
        name:'laptop',
        price:'40000',
        imgUrl:'../../assets/img/denim.jpeg',
        rating:4
    },
{
    name:'mobile',
        price:'10000',
        imgUrl:'../../assets/img/denim1.jpeg',
        rating:3

},
{
    name:'ac',
        price:'44000',
        imgUrl:'../../assets/img/images.jpg',
        rating:4

},
{
    name:'tv',
        price:'34000',
        imgUrl:'../../assets/img/pexels-photo-807598.jpeg',
        rating:5

}
];

AddPro(item:Iproduct){
    this.productInfo.push(item);
}
}






