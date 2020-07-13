import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { NoRightClickDirective } from "../../shared/_directives/no-right-click.directive";

@NgModule({
  declarations: [RegisterComponent, LoginComponent, NoRightClickDirective],
  imports: [CommonModule, AuthRoutingModule, FormsModule, SharedModule],
})
export class AuthModule {}
