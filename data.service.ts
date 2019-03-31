import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(name) {
    return this.http.get(this.url + name);
  }
}
