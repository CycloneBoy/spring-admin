

export class Constants {
    // 菜单列表
    public static MENU_LIST = [
        {
            title: '首页',
            key: '/card',
            icon: 'home',
            children:[],
        },
        {
            title: 'UI',
            key: '/ui',
            icon: 'home',
            children: [
                {
                    title: '按钮',
                    key: '/ui/buttons',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '弹框',
                    key: '/ui/modals',
                    icon: 'home',
                    children:[],
                },
                {
                    title: 'Loading',
                    key: '/ui/loadings',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '通知提醒',
                    key: '/ui/notification',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '全局Message',
                    key: '/ui/messages',
                    icon: 'home',
                    children:[],
                },
                {
                    title: 'Tab页签',
                    key: '/ui/tabs',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '图片画廊',
                    key: '/ui/gallery',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '轮播图',
                    key: '/ui/carousel',
                    icon: 'home',
                    children:[],
                }
            ]
        },
        {
            title: '表单',
            key: '/form',
            icon: 'form',
            children: [
                {
                    title: '登录',
                    key: '/form/login',
                    icon: 'form',
                    children:[],
                },
                {
                    title: '注册',
                    key: '/form/reg',
                    icon: 'home',
                    children:[],
                }
            ]
        },
        {
            title: '表格',
            key: '/table',
            icon: 'table',
            children: [
                {
                    title: '基础表格',
                    key: '/admin/table/basic',
                    icon: 'home',
                    children:[],
                },
                {
                    title: '高级表格',
                    key: '/admin/table/list',
                    icon: 'home',
                    children:[],
                }
            ]
        },
        {
          title: '搜索',
          key: '/search',
          icon: 'search',
          children: [
            {
              title: '搜索列表(文章)',
              key: '/admin/search/articles',
              icon: 'book',
              children:[],
            },
            {
              title: '搜索列表(项目)',
              key: '/admin/search/applications',
              icon: 'appstore',
              children:[],
            },
            {
              title: '搜索列表(应用)',
              key: '/admin/search/projects',
              icon: 'android',
              children:[],
            }
          ]
        },
        {
            title: '富文本',
            key: '/rich',
            icon: 'file-markdown',
            children:[],
        },
        {
            title: '城市管理',
            key: '/city',
            icon: 'file-markdown',
            children:[],
        },
        {
            title: '订单管理',
            key: '/order',
            icon: 'fire',
            children: [
                {
                    title: '订单详情',
                    key: 'detail',
                    children:[],
                    icon: 'home',
                },
                {
                    title: '结束订单',
                    key: 'finish',
                    children:[],
                    icon: 'home',
                }
            ]
        },
        {
            title: '员工管理',
            key: '/user',
            icon: 'user',
            children:[],
        },
        {
            title: '车辆地图',
            key: '/bikeMap',
            icon: 'fire',
            children:[],
        },
        {
            title: '图表',
            key: '/charts',
            icon: 'instagram',
            children: [
                {
                    title: 'v1',
                    key: '/admin/dashboard/v1',
                    icon: 'bar-chart',
                    children:[],
                },
                {
                    title: '分析页',
                    key: '/admin/dashboard/analysis',
                    icon: 'pie-chart',
                    children:[],
                },
                {
                    title: '监控页',
                    key: '/admin/dashboard/monitor',
                    icon: 'line-chart',
                    children:[],
                },
                {
                  title: '工作台',
                  key: '/admin/dashboard/workplace',
                  icon: 'line-chart',
                  children:[],
                }
            ]
        },
        {
            title: '权限设置',
            key: '/permission',
            icon: 'team',
            children:[],
        },
    ];

    public static FORM_DATA_LIST  = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ];
    public static readonly BOOK_SHELF_FULL = "Full";

  /**
   * URL 请求链接
   */
  public static HOST_CALL_INFO = "http://localhost:10013";

  public static URL_CALL_INFO_GET_BY_DAY = "/api/call/byday";

  public static URL_CALL_INFO_GET_BY_MONTH = "/api/call/bymonth";

  public static URL_CALL_INFO_GET_BY_YEAR = "/api/call/byyear";



}
