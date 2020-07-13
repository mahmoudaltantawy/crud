import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptors } from "./headers-interceptor";
import { ErrorInterceptors } from "./error-interceptor";

export const myhttpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptors, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true },
];
