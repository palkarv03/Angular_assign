import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-laptop",
  templateUrl: "./laptop.component.html",
  styleUrls: ["./laptop.component.css"]
})
export class LaptopComponent implements OnInit {
  constructor() {}

  Laptops = [
    {
      name: "Dell",
      price: 12000,
      imgURL: "../../assets/img/dell_laptop.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Mi",
      price: 13000,
      imgURL: "../../assets/img/mi_laptop.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Lenovo",
      price: 15000,
      imgURL: "../../assets/img/lenovo_laptop.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "Asus Gaming Laptop",
      price: 17000,
      imgURL: "../../assets/img/asus_rog.jfif",
      rating: [1, 2, 3, 4]
    },
    {
      name: "Huawei",
      price: 19000,
      imgURL: "../../assets/img/huawei_laptop.jfif",
      rating: [1, 2, 3, 4, 5]
    },
    {
      name: "Microsoft",
      price: 9000,
      imgURL: "../../assets/img/microsoft_laptop.jfif",
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
