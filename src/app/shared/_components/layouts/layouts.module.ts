import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { BlankComponent } from "./blank/blank.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AuthComponent, AdminComponent, UserComponent, BlankComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutsModule {}
