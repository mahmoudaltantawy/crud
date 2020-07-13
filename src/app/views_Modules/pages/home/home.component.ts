import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  authenticated: boolean;
  selectedlang: any;
  locale: SelectItem[];
  constructor() {
    //SelectItem API with label-value pairs
    this.locale = [
      { label: "EN", value: "en" },
      { label: "AR", value: "ar" },
    ];
  }

  ngOnInit() {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }
}
