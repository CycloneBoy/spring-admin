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


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule],
  declarations: [WelcomeComponent, NavRightComponent, TravelItemComponent, TravelListComponent, FrontHeaderComponent, FrontFooterComponent, ContentComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
