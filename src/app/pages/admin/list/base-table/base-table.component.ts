import {Component, OnInit, TemplateRef} from '@angular/core';
import {ItemData} from '../../../../../config/BaseModel';
import {HttpClient} from '@angular/common/http';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.less']
})
export class BaseTableComponent implements OnInit {

  title:string = "基础表格";

  validateForm: FormGroup;

  // 查询参数
  q: any = {
    pi: 1,
    ps: 10,
    sorter: '',
    status: null,
    statusList: [],
  };

  // 下拉框
  status = [
    { index: 0, text: '关闭', value: false, type: 'default', checked: false },
    {
      index: 1,
      text: '运行中',
      value: false,
      type: 'processing',
      checked: false,
    },
    { index: 2, text: '已上线', value: false, type: 'success', checked: false },
    { index: 3, text: '异常', value: false, type: 'error', checked: false },
  ];


  constructor(
    private http: HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private fb: FormBuilder
  ) { }

  listOfSelection = [
    {
      text: '全选',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: '选奇数列',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: '选偶数列',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  // 可展开
  mapOfExpandData: { [key: string]: boolean } = {};

  // 筛选和排序
  sortName: string | null = null;
  sortValue: string | null = null;
  searchAddress: string;
  listOfName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
  listOfAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  listOfSearchName: string[] = [];

  description: string;


  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `Edward King ${i}`,
        age: i ,
        address: `London, Park Lane no. ${i}`
      });
    }

    // 搜索表单校验
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = (item: { name: string; age: number; address: string }) =>
      (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);


    const data = this.listOfAllData;
    // const data = this.listOfAllData.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.listOfAllData = data.sort((a, b) =>

        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.listOfAllData = data;
    }
  }

  add(tpl: TemplateRef<{}>) {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        console.debug("onok:" + this.description)
        this.http.post('/rule', { description: this.description }).subscribe(() =>  console.log("success"));
      },
    });
  }

  remove() {
    this.msg.success(`删除操作`);
  }

  approval() {
    this.msg.success(`审批了 2 笔`);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
