import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { StoreService } from "../../../shared/services/store.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit, AfterViewInit {
  myForm: FormGroup;
  flightType: string;
  toggled: boolean;

  constructor(private formBuilder: FormBuilder, private store: StoreService) {}

  text: string;
  results: string[];
  states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "lhr",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "cairo",
    "Massachusetts",
    "jedaah",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  airlines = ["MS", "SA", "AR", "US", "UR"];
  minDateFrom;
  maxDateFrom;
  minDateTo;
  maxDateTo;
  filteredBrands: any[];
  brand: string;
  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.states.length; i++) {
      let brand = this.states[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
    console.log(this.brand);
  }
  ngOnInit() {
    this.flightType = "oneway";
    this.myForm = this.formControls;
    this.myForm.controls["flight_name"].setValue("oneway");
    this.store.toggled.subscribe((res) => {
      this.toggled = res;
    });
  }
  ngAfterViewInit() {
    // console.log(this.lol.nativeElement);
  }
  public model: any;
  get formControls() {
    return this.formBuilder.group({
      prefred: "",
      class: "",
      flight_name: "",
      flights: this.formBuilder.array([this.getFlightGroup()]),
    });
  }
  getFlightGroup() {
    return this.formBuilder.group({
      city: "",
      to: "",
      date: null,
      range: null,
    });
  }
  getFlightType(e) {
    this.flightType = e.srcElement.value;
    this.myForm.controls["flights"]["controls"][0].controls.date.setValue("");
    this.myForm.controls["flight_name"].setValue(this.flightType);
  }
  sendSearch() {
    console.log(this.myForm.value);
    let from = new Date(
      this.myForm.controls["flights"]["controls"][0].controls.date.value
    ).toDateString();
    let to = this.myForm.controls["flights"]["controls"][0].controls.city.value;
    let date = this.myForm.controls["flights"]["controls"][0].controls.to.value;
    console.log(from, to, date);
    //this.router.navigate(["/result", from, to, date]);
  }
  addFlight() {
    const conrtol = this.getFlightGroup();
    (<FormArray>this.myForm.get("flights")).push(conrtol);
  }

  removeFlight(i) {
    let control = this.myForm.controls["flights"]["controls"][i];
    let index = this.myForm.controls["flights"]["controls"].indexOf(control);
    console.log(index);
    this.myForm.controls["flights"]["controls"].splice(index, 1);
  }
  openToggled(e) {
    if (e.type == "click") {
      e.stopPropagation();
      this.store.toggled.next(true);
      this.store.toggled.subscribe((res) => {
        this.toggled = res;
      });
    }
  }
}
