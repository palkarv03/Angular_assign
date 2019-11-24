import { Component } from "@angular/core";
@Component({
  selector: "app-heart",
  templateUrl: "./heart.component.html",
  styleUrls: ["./heart.component.css"]
})
export class HeartComponent {
  constructor() {}
  activeHeart: boolean = false;
  HeartLike() {
    this.activeHeart = !this.activeHeart;
  }
}
