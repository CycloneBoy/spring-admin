import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-search',
  templateUrl: './travel-search.component.html',
  styleUrls: ['./travel-search.component.less']
})
export class TravelSearchComponent implements OnInit {

  tabs: Array<{ name: string; content: string }> = [];
  nzTabPosition = 'top';
  selectedIndex = 0;

  /* tslint:disable-next-line:no-any */
  log(args: any[]): void {
    console.log(args);
  }

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 11; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
  }

}
