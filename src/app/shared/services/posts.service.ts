import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class PostsService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> if i want to send custom thing with req in header  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const myheaders = { lol: "lol" };
    this.headers = new HttpHeaders(myheaders);
  }
  getAll() {
    return this.http.get(`${env.apiUrl}/posts`, { headers: this.headers });
    //if i want with params
    // return this.http.get(`${env.apiUrl}/posts`, {
    //   params: { page: "10", name: "moahmed", age: "50" },
    //   headers: this.headers,
    // });
  }
  addpost(formValue) {
    return this.http.post(`${env.apiUrl}/posts/`, formValue, {
      headers: this.headers,
    });
  }
  deletePost(id: number) {
    return this.http.delete(`${env.apiUrl}/posts/${id}`, {
      headers: this.headers,
    });
  }
  getSpecificPost(id: number) {
    return this.http.get(`${env.apiUrl}/posts/${id}`, {
      headers: this.headers,
    });
  }
  updatePost(data, id) {
    return this.http.put(`${env.apiUrl}/posts/${id}`, data, {
      headers: this.headers,
    });
  }
}
