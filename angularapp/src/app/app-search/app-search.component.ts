import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  searchTest: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  // handleKeyUp() {
  //   console.log('Enter key pressed. Perform search or other actions here.');
  //   console.log('Search term:', this.searchTest);
  // }
}
