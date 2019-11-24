import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electonic',
  templateUrl: './electonic.component.html',
  styleUrls: ['./electonic.component.css']
})
export class ElectonicComponent implements OnInit {

  constructor() { }

  device: string;
  isActiveTV: boolean = false;
  isActiveAC: boolean = false;
  isActiveMobile: boolean = false;
  isActiveLaptop: boolean = false;
  AddTV() {
    this.device = "TV";
    this.isActiveTV = true;
    this.isActiveAC = this.isActiveMobile = this.isActiveLaptop = false;
  }
  AddAC() {
    this.device = "AC";
    this.isActiveAC = true;
    this.isActiveTV = this.isActiveMobile = this.isActiveLaptop = false;
  }
  AddLaptop() {
    this.device = "Laptop";
    this.isActiveLaptop = true;
    this.isActiveAC = this.isActiveTV = this.isActiveMobile = false;
  }
  AddMobile() {
    this.device = "Mobile";
    this.isActiveMobile = true;
    this.isActiveAC = this.isActiveTV = this.isActiveLaptop = false;
  }
  likeCount: number = 10;
  LikeCount(item) {
    this.likeCount = item;
  }

  ngOnInit() {
  }

}
