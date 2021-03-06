import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as en } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data) {
    return this.http.post(`${en.apiUrl}/auth/login`, data);
  }
}
