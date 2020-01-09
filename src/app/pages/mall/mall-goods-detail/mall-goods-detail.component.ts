import {Component, Input, OnInit} from '@angular/core';
import {GoodsItem} from '../../../../config/BaseModel';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-mall-goods-detail',
  templateUrl: './mall-goods-detail.component.html',
  styleUrls: ['./mall-goods-detail.component.less']
})
export class MallGoodsDetailComponent implements OnInit {

  // 购买数量
  wantNumber = 1;
  @Input()  goodsItem: GoodsItem;

  goodsItem$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.goodsItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );
  }

}
