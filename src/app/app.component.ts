import { Component, HostListener } from "@angular/core";
import { LoaderService } from "./shared/services/loader.service";
import { StoreService } from "./shared/services/store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "projectone";

  constructor(public load: LoaderService, public store: StoreService) {}
}
