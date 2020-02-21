import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://api.github.com/users/";

  constructor(
    public http: HttpClient,
  ) {}

  getUser(user: string){
    return this.http.get(this.url + user);
  }

}
