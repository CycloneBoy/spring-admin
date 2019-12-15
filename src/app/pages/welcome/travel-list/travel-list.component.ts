import { Component, OnInit } from '@angular/core';
import {TravelItem} from '../../../../config/BaseModel';
import {TRAVEL_ITEM_LIST} from '../../../../config/MockData';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.less']
})
export class TravelListComponent implements OnInit {

  travelItemList : TravelItem[] = TRAVEL_ITEM_LIST;

  selectedId: number;

  constructor() { }

  ngOnInit() {
  }

}
