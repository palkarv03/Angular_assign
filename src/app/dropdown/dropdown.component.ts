import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  constructor() {}

  isActive = false;
  Active() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {}
}
