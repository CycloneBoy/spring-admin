import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallComponent } from './mall.component';
import { MallContentComponent } from './mall-content/mall-content.component';
import { MallFooterComponent } from './mall-footer/mall-footer.component';
import { MallHeaderComponent } from './mall-header/mall-header.component';
import { MallListComponent } from './mall-list/mall-list.component';
import {
  NzAvatarModule, NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzIconModule,
  NzInputNumberModule,
  NzListModule,
  NzSelectModule,
  NzTagModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { MallGoodsDetailComponent } from './mall-goods-detail/mall-goods-detail.component';


@NgModule({
  declarations: [MallComponent, MallContentComponent, MallFooterComponent, MallHeaderComponent, MallListComponent, MallGoodsDetailComponent],
  imports: [
    CommonModule,
    MallRoutingModule,
    NzCardModule,
    NzTagModule,
    NzFormModule,
    NzSelectModule,
    NzListModule,
    NzAvatarModule,
    FormsModule,
    NzIconModule,
    NzInputNumberModule,
    NzButtonModule,
  ]
})
export class MallModule { }
