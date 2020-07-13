import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-flight-layout-dummydata",
  templateUrl: "./flight-layout-dummydata.component.html",
  styleUrls: ["./flight-layout-dummydata.component.scss"],
})
export class FlightLayoutDummydataComponent implements OnInit {
  pic: string;

  constructor() {}

  ngOnInit() {}
  setDefaultPic() {
    this.pic = "../../assets/images/dummy.jpg";
  }
}
