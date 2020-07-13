import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { NotificationService } from "../services/notification.service";
@Injectable({
  providedIn: "root",
})
export class ErrorInterceptors implements HttpInterceptor {
  constructor(private router: Router, private noti: NotificationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client Error: ${error.error.message}`;
          this.noti.errorNotification(errorMessage);
        } else {
          // server-side error
          if (error.status == 401) {
            errorMessage = `Server Error: ${error.error.message}`;
            this.noti.errorNotification(errorMessage);
            this.router.navigate(["auth/login"]);
          } else {
            errorMessage = `Server Error: ${error.error.message}`;
            this.noti.errorNotification(errorMessage);
            this.router.navigate(["/"]);
          }
        }
        return throwError(errorMessage);
      })
    );
  }
}
