import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class HeaderInterceptors implements HttpInterceptor {
  constructor(private loader: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    const modifiedRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });
    this.loader.show();
    return next
      .handle(modifiedRequest)
      .pipe(finalize(() => this.loader.hide()));
  }
}
