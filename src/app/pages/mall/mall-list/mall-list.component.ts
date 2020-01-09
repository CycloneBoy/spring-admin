import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {GET_FAKE_GOODS_LIST, GOODS_ITEM_LIST} from '../../../../config/MockData';

@Component({
  selector: 'app-mall-list',
  templateUrl: './mall-list.component.html',
  styleUrls: ['./mall-list.component.less']
})
export class MallListComponent implements OnInit {

  q: any = {
    ps: 5,
    categories: [],
    owners: ['zxx'],
  };

  list: any[] = [];

  loading = true;

  // region: cateogry
  categories = [
    { id: 0, text: '全部', value: false },
    { id: 1, text: '类目一', value: false },
    { id: 2, text: '类目二', value: false },
    { id: 3, text: '类目三', value: false },
    { id: 4, text: '类目四', value: false },
    { id: 5, text: '类目五', value: false },
    { id: 6, text: '类目六', value: false },
    { id: 7, text: '类目七', value: false },
    { id: 8, text: '类目八', value: false },
    { id: 9, text: '类目九', value: false },
    { id: 10, text: '类目十', value: false },
    { id: 11, text: '类目十一', value: false },
    { id: 12, text: '类目十二', value: false },
  ];

  changeCategory(status: boolean, idx: number) {
    if (idx === 0) {
      this.categories.map(i => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
    this.getData();
  }
  // endregion

  constructor(private http: HttpClient,
              public msg: NzMessageService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // this.loading = true;
    this.list = this.list.concat(GET_FAKE_GOODS_LIST(8));
    this.loading = false;
    this.cdr.detectChanges();
  }

}
