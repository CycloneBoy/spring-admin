import {HttpRequest} from '@angular/common/http';


export interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

export interface MockRequest {
  /** 路由参数 */
  params?: any;
  /** URL参数 */
  queryString?: any;
  headers?: any;
  body?: any;
  /** 原始 `HttpRequest` */
  original: HttpRequest<any>;
}
