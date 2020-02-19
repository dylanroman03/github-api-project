import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private urlUsers = "https://api.github.com/users/dylanroman03"

  constructor(
    public http: HttpClient
  ){}

  getUsers(){
    this.http.get(this.urlUsers)
    .subscribe(data => console.log(data))
  }
}
