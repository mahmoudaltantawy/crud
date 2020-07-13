import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeFlightSearchComponent } from "./home-flight-search/home-flight-search.component";

const routes: Routes = [
  {
    path: "",
    component: HomeFlightSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
