import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlightsRoutingModule } from "./flights-routing.module";
import { FlightHomeComponent } from "./flight-home/flight-home.component";
import { HeaderComponent } from "./flight-layout/header/header.component";
import { FooterComponent } from "./flight-layout/footer/footer.component";
import { FlightLayoutDummydataComponent } from "./flight-layout/flight-layout-dummydata/flight-layout-dummydata.component";
import { HomeFlightSearchComponent } from "./home-flight-search/home-flight-search.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";

import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    FlightHomeComponent,
    HeaderComponent,
    FooterComponent,
    FlightLayoutDummydataComponent,
    HomeFlightSearchComponent,
    SearchFormComponent,
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule,
    AutoCompleteModule,
    CalendarModule,
    HttpClientModule,
  ],
})
export class FlightsModule {}
