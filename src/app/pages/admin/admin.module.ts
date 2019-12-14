import {Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ContentComponent } from './content/content.component';
import {Menu} from './Menu';
import {Constants} from '../../../config/Constants';
import {
  NzAlertModule,
  NzAvatarModule, NzBadgeModule,
  NzBreadCrumbModule, NzButtonModule, NzCardModule,
  NzDropDownModule, NzFormModule,
  NzGridModule,
  NzIconModule, NzInputModule,
  NzLayoutModule, NzListModule,
  NzMenuModule, NzSelectModule, NzTableModule, NzTabsModule, NzTagModule, NzToolTipModule
} from 'ng-zorro-antd';
import {ProTableListComponent} from './list/table-list/table-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BaseTableComponent } from './list/base-table/base-table.component';
import { V1Component } from './dashboard/v1/v1.component';
import { AnalysisComponent } from './dashboard/analysis/analysis.component';
import { MonitorComponent } from './dashboard/monitor/monitor.component';
import { WorkplaceComponent } from './dashboard/workplace/workplace.component';
import { SearchComponent } from './search/search/search.component';
import { ArticlesComponent } from './search/articles/articles.component';
import { ProjectsComponent } from './search/projects/projects.component';
import { ApplicationsComponent } from './search/applications/applications.component';
import { HeaderNotifyComponent } from './header/header-notify/header-notify.component';


@NgModule({
  declarations: [AdminComponent, ContentComponent,ProTableListComponent, BaseTableComponent, V1Component, AnalysisComponent, MonitorComponent, WorkplaceComponent, SearchComponent, ArticlesComponent, ProjectsComponent, ApplicationsComponent, HeaderNotifyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzAvatarModule,
    NzCardModule,
    NzFormModule,
    FormsModule,
    NzSelectModule,
    NzButtonModule,
    NzBadgeModule,
    NzAlertModule,
    NzTableModule,
    ReactiveFormsModule,
    NzInputModule,
    NzListModule,
    NzToolTipModule,
    NzTabsModule,
    NzTagModule
  ]
})
export class AdminModule {


}
