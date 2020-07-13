import { Component, OnInit } from "@angular/core";
import { trip } from "../../../shared/_enums/triptypes";
@Component({
  selector: "app-home-flight-search",
  templateUrl: "./home-flight-search.component.html",
  styleUrls: ["./home-flight-search.component.scss"],
})
export class HomeFlightSearchComponent implements OnInit {
  constructor() {}
  oneway;
  ngOnInit() {
    this.oneway = trip.oneway;
    console.log(this.oneway);
  }
}
