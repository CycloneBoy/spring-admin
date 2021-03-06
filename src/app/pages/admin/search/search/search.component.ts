import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit,OnDestroy {

  private router$: Subscription;
  tabs: any[] = [
    {
      key: 'articles',
      tab: '文章',
    },
    {
      key: 'applications',
      tab: '应用',
    },
    {
      key: 'projects',
      tab: '项目',
    },
  ];

  pos = 0;

  constructor(private router: Router) {}

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) {
      this.pos = idx;
    }
  }

  ngOnInit(): void {
    this.router$ = this.router.events.pipe(
      filter(e => e instanceof ActivationEnd)
    ).subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: any) {
    this.router.navigateByUrl(`admin/table/${item.key}`);
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }

}
