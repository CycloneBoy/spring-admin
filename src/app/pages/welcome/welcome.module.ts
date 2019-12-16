import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { TravelItemComponent } from './travel-item/travel-item.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import {CommonModule} from '@angular/common';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { ContentComponent } from './content/content.component';
import { TravelSearchComponent } from './travel-search/travel-search.component';
import {NzButtonModule, NzInputModule, NzTabsModule} from 'ng-zorro-antd';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, NzInputModule, NzButtonModule, NzTabsModule],
  declarations: [WelcomeComponent, NavRightComponent, TravelItemComponent, TravelListComponent, FrontHeaderComponent, FrontFooterComponent, ContentComponent, TravelSearchComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
