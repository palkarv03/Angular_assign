import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-tv",
  templateUrl: "./tv.component.html",
  styleUrls: ["./tv.component.css"]
})
export class TvComponent implements OnInit {
  constructor() {}

  TV = [
    {
      name: "LG",
      price: 12000,
      imgURL: "../../assets/img/lg_tv.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Hitachi",
      price: 13000,
      imgURL: "../../assets/img/hitachi_tv.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Lloyd",
      price: 15000,
      imgURL: "../../assets/img/lloyd_tv.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "MI",
      price: 17000,
      imgURL: "../../assets/img/mi_tv.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Thomson",
      price: 11000,
      imgURL: "../../assets/img/thomson_tv.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "Samsung",
      price: 9000,
      imgURL: "../../assets/img/samsung_tv.jfif",
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
