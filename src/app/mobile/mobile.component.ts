import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  constructor() {}

  Mobiles = [
    {
      name: "Realme_5pro",
      price: 12000,
      imgURL: "../../assets/img/realme_5.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Vivo_apex",
      price: 13000,
      imgURL: "../../assets/img/vivo_apex.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Vivo_z1pro",
      price: 15000,
      imgURL: "../../assets/img/vivo_z1pro.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "Honor",
      price: 17000,
      imgURL: "../../assets/img/honor.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Oppo_Reno",
      price: 11000,
      imgURL: "../../assets/img/oppo_reno.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "iPhone 7",
      price: 9000,
      imgURL: "../../assets/img/iphone7.jfif",
      rating: [1, 2, 3, 4]
    }
  ];
  isActive: boolean = false;
  @Input() like: number;

  @Output() evEmit = new EventEmitter();
  Action() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.like += 1;
    }
    if (!this.isActive) {
      this.like -= 1;
    }
    this.evEmit.emit(this.like);
  }

  ngOnInit() {}
}
