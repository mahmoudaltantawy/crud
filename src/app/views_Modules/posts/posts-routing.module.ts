import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostslistComponent } from "./postslist/postslist.component";
import { PostShowComponent } from "./post-show/post-show.component";
import { PostAddComponent } from "./post-add/post-add.component";
import { PostEditComponent } from "./post-edit/post-edit.component";
import { AuthGuard } from "../../shared/_guards/auth-guard.service";
const routes: Routes = [
  { path: "", component: PostslistComponent, canActivate: [AuthGuard] },
  { path: "show/:id", component: PostShowComponent, canActivate: [AuthGuard] },
  { path: "edit/:id", component: PostEditComponent },
  { path: "add", component: PostAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
