import { Component, OnInit } from '@angular/core';
import {ACTIVITIES, LINKS, MEMBERS, NOTICE} from '../../../../../config/MockData';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less']
})
export class WorkplaceComponent implements OnInit {

  notice: any[] = [];
  activities: any[] = [];
  radarData: any[];
  loading = false;

  // region: mock data
  links:any[];
  members:any[];

  constructor() { }

  ngOnInit() {
    this.notice = NOTICE;
    this.activities = ACTIVITIES.map((item: any) => {
      item.template = item.template.split(/@\{([^{}]*)\}/gi).map((key: string) => {
        if (item[key]) return `<a>${item[key].name}</a>`;
        return key;
      });
      return item;
    });

    this.links = LINKS;

    this.members = MEMBERS;
  }

}
