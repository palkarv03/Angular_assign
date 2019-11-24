import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-twitter",
  templateUrl: "./twitter.component.html",
  styleUrls: ["./twitter.component.css"]
})
export class TwitterComponent {
  constructor() {}

  likeCount: number = 10;
  LikeCount(item) {
    this.likeCount = item;
  }

  activeHeart: boolean = false;
  HeartLike() {
    this.activeHeart = !this.activeHeart;
  }
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
}
