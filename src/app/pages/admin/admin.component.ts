import {Component, Input, OnInit} from '@angular/core';
import {Menu} from './Menu';
import {Constants} from '../../../config/Constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  @Input() menuList : Array<Menu>;
  isCollapsed = true;
  username : string = "环球";
  userMessageCount : number = 10;


  constructor() { }

  ngOnInit() {
    this.menuList = Constants.MENU_LIST;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
