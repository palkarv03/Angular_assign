import { Component, OnInit } from "@angular/core";
import { tableDetails } from "./tables";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.css"]
})
export class TableComponent implements OnInit {
  userRecord: Array<object>;
  courseRecord: Array<object>;
  constructor(private tables: tableDetails) {
    this.userRecord = tables.getUserRecord();
    this.courseRecord = tables.getCourseRecord();
  }
  ngOnInit() {}
}
