import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users = {
    items : [
      {
        login : "dylan"
      },
      {
        login : "roman"
      }
    ]
  };

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(user) {
    this.users = this.searchService.getSearch(user);
  }
}
