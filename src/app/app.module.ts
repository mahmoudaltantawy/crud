import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { myhttpInterceptors } from "./shared/_interceptors";
import { MessageService } from "primeng/api";

import { NotificationService } from "./shared/services/notification.service";
import { ToastModule } from "primeng/toast";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { FlightsModule } from "./views_Modules/flights/flights.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastModule,
    ProgressSpinnerModule,
    FlightsModule,
  ],
  providers: [myhttpInterceptors, MessageService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
