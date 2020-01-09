import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MallComponent} from './mall.component';
import {MallContentComponent} from './mall-content/mall-content.component';
import {MallListComponent} from './mall-list/mall-list.component';
import {MallGoodsDetailComponent} from './mall-goods-detail/mall-goods-detail.component';


const routes: Routes = [
  { path: '', component: MallComponent ,children:[
      // { path: 'header', component: FooterComponent  },
      // { path: 'navright', component: NavRightComponent },
      { path: 'content', component: MallContentComponent },
      { path: 'home', component: MallListComponent },
      { path: 'content/detail/:id',component:MallGoodsDetailComponent},
      { path: '',redirectTo: '/mall/content',pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
