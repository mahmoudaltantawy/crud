import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      // not logged in so redirect to login page with the return url
      this.router.navigate(["/auth/login"]);
      return false;
    }
    // authorised so return true
    return true;
  }
}
