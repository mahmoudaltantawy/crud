import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./shared/_components/layouts/admin/admin.component";
import { AuthComponent } from "./shared/_components/layouts/auth/auth.component";
import { UserComponent } from "./shared/_components/layouts/user/user.component";
import { BlankComponent } from "./shared/_components/layouts/blank/blank.component";
import { NotFoundComponent } from "./shared/_components/layouts/not-found/not-found.component";
import { PostsResolverService } from "./shared/_guards/posts-resolver.service";
import { FlightHomeComponent } from "./views_Modules/flights/flight-home/flight-home.component";
const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views_Modules/pages/pages.module").then(
            (m) => m.PagesModule
          ),
      },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views_Modules/posts/posts.module").then(
            (m) => m.PostsModule
          ),
        resolve: {
          myresolve: PostsResolverService,
        },
      },
     
    ],
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views_Modules/auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: "notes",
    component: UserComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views_Modules/notes/notes.module").then(
            (m) => m.NotesModule
          ),
      },
    ],
  },
  {
    path: "flights",
    component: FlightHomeComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views_Modules/flights/flights.module").then(
            (m) => m.FlightsModule
          ),
      },
    ],
  },

  {
    path: "**",
    component: NotFoundComponent,
  },
  {
    path: "",
    component: BlankComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
