import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles:[`
  ul li{
    list-style:none
  }`]
})
export class ListComponent{
  laptopbrand:string = 'Laptop Brands';
  mobilebrand:string = 'Mobile Brands';
  laptopDetails:string[]=["Dell","HP","Lenovo","Apple"];
  mobileDetails:string[]=["Apple","Moto","Lenovo","Oppo"];
  constructor() { }

}
