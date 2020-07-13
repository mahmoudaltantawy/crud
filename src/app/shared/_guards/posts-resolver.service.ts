import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../services/posts.service";
@Injectable({
  providedIn: "root",
})
export class PostsResolverService implements Resolve<any> {
  constructor(private postsService: PostsService) {}
  resolve(): Observable<any> {
    return this.postsService.getAll();
  }
}
