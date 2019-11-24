import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})
export class AcComponent implements OnInit {

  constructor() { }

  AC =[
    {
    name: "Voltas",
    price: 12000,
    imgURL: "../../assets/img/voltas_ac.jfif",
    rating: [1,2,3,4]
},
{
    name: "Sansui",
    price: 13000,
    imgURL: "../../assets/img/sansui_ac.jfif",
    rating: [1,2,3,4]
},
{
    name: "Hitachi",
    price: 15000,
    imgURL: "../../assets/img/hitachi_ac.jfif",
    rating: [1,2,3,4,5]
},
{
    name: "Kenstar",
    price: 17000,
    imgURL: "../../assets/img/kenstar_ac.jfif",
    rating: [1,2,3,4]
},
{
    name: "Bluestar",
    price: 11000,
    imgURL: "../../assets/img/bluestar_ac.jfif",
    rating: [1,2,3,4,5]
},
{
    name: "LG",
    price: 9000,
    imgURL: "../../assets/img/lg_ac.jfif",
    rating: [1,2,3,4]
}
];
isActive:boolean = false;
@Input() like:number;

@Output() evEmit = new EventEmitter();
Action(){
    this.isActive = !this.isActive;
    if(this.isActive){
        this.like += 1;
    }
    if(!this.isActive){
        this.like -= 1;
    }
    this.evEmit.emit(this.like);        
}

  
  ngOnInit() {
  }

}
