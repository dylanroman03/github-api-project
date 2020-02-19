import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = "https://api.github.com/search/users?q=";
  users: any;

  constructor(
    public http: HttpClient
  ) { }

  getSearch(user){
    this.http.get(this.url + user)
      .subscribe(data => {
        this.users = data
      })
    return this.users;
  }
}
