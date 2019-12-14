// tslint:disable
import * as Mock from 'mockjs';
import { format } from 'date-fns';

// region: mock data

const titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];
const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
  'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '卡色',
  'cipchk',
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

const visitData: any[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2: any[] = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData: any[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData: any[] = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '个护健康',
    y: 188,
  },
  {
    x: '服饰箱包',
    y: 344,
  },
  {
    x: '母婴产品',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData: any[] = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `门店${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData: any[] = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

//
const radarData: any[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});




function getNotice(): any[] {
  return [
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      description: '那是一种内在的东西， 他们到达不了，也无法触及的',
      updatedAt: new Date(),
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: new Date('2017-07-24'),
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: new Date(),
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23'),
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23'),
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23'),
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ];
}


function getActivities(): any[] {
  return [
    {
      id: 'trend-1',
      updatedAt: new Date(),
      user: {
        name: '林东东',
        avatar: avatars[0],
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-2',
      updatedAt: new Date(),
      user: {
        name: '付小小',
        avatar: avatars[1],
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-3',
      updatedAt: new Date(),
      user: {
        name: '曲丽丽',
        avatar: avatars[2],
      },
      group: {
        name: '中二少女团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-4',
      updatedAt: new Date(),
      user: {
        name: '周星星',
        avatar: avatars[3],
      },
      project: {
        name: '5 月日常迭代',
        link: 'http://github.com/',
      },
      template: '将 @{project} 更新至已发布状态',
    },
    {
      id: 'trend-5',
      updatedAt: new Date(),
      user: {
        name: '朱偏右',
        avatar: avatars[4],
      },
      project: {
        name: '工程效能',
        link: 'http://github.com/',
      },
      comment: {
        name: '留言',
        link: 'http://github.com/',
      },
      template: '在 @{project} 发布了 @{comment}',
    },
    {
      id: 'trend-6',
      updatedAt: new Date(),
      user: {
        name: '乐哥',
        avatar: avatars[5],
      },
      group: {
        name: '程序员日常',
        link: 'http://github.com/',
      },
      project: {
        name: '品牌迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
  ];
}

// endregion

export const CHARTS = {
  '/chart': JSON.parse(
    JSON.stringify({
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      radarData,
    }),
  ),
  '/chart/visit': JSON.parse(JSON.stringify(visitData)),
  '/chart/tags': Mock.mock({
    'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
  }),
};

export const NOTICE = getNotice();

export const ACTIVITIES = getActivities();
