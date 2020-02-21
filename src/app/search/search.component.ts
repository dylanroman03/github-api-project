import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: any;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(user) {
    this.searchService.getSearch(user)
      .subscribe(users => this.users = users)
  }
}
