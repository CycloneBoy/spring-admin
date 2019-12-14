import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {ContentComponent} from './content/content.component';
import {ProTableListComponent} from './list/table-list/table-list.component';
import {BaseTableComponent} from './list/base-table/base-table.component';
import {V1Component} from './dashboard/v1/v1.component';
import {AnalysisComponent} from './dashboard/analysis/analysis.component';
import {MonitorComponent} from './dashboard/monitor/monitor.component';
import {WorkplaceComponent} from './dashboard/workplace/workplace.component';
import {ApplicationsComponent} from './search/applications/applications.component';
import {ArticlesComponent} from './search/articles/articles.component';
import {ProjectsComponent} from './search/projects/projects.component';
import {SearchComponent} from './search/search/search.component';



const routes: Routes = [
  {
    path: '', component: AdminComponent ,children:[
      { path: 'content', component: ContentComponent  },

      { path: 'table/list', component: ProTableListComponent  },
      { path: 'table/basic', component: BaseTableComponent},

      {
        path: 'search',
        children: [
          {
            path: '',
            component: SearchComponent,
            children: [
              { path: 'articles', component: ArticlesComponent },
              { path: 'projects', component: ProjectsComponent },
              { path: 'applications', component: ApplicationsComponent },
            ],
          },
        ],
      },

      { path: 'table/search', component: SearchComponent},
      { path: 'table/articles', component: ArticlesComponent},
      { path: 'table/applications', component: ApplicationsComponent},
      { path: 'table/projects', component: ProjectsComponent},

      { path: 'dashboard/v1', component: V1Component},
      { path: 'dashboard/analysis', component: AnalysisComponent},
      { path: 'dashboard/monitor', component: MonitorComponent},
      { path: 'dashboard/workplace', component: WorkplaceComponent},

      { path: '',redirectTo: '/admin/content',pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
