import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { PostslistComponent } from "./postslist/postslist.component";
import { PostShowComponent } from "./post-show/post-show.component";
import { PostAddComponent } from "./post-add/post-add.component";
import { PostEditComponent } from "./post-edit/post-edit.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    PostslistComponent,
    PostShowComponent,
    PostAddComponent,
    PostEditComponent,
  ],

  providers: [ConfirmationService],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ConfirmDialogModule,
    ToastModule,
    ReactiveFormsModule,
  ],
})
export class PostsModule {}
