// tslint:disable
import * as Mock from 'mockjs';
import { format } from 'date-fns';
import {GoodsItem, MockRequest, TravelItem} from './BaseModel';

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

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    link: '',
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    link: '',
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    link: '',
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    link: '',
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    link: '',
  },
];

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

function getFakeList(count: number = 20): any[] {
  const list: any[] = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
        },
      ],
    });
  }

  return list;
}

function getFakeGoodsList(count: number = 20): any[] {
  const list: any[] = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: i,
      tid: i,
      name: titles[i % 8],
      imageUrl: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      price: i * 1000,
      stock: i * 1000,
      avatar: avatars[i % 8],
      description: desc[i % 5],
      shopName:['小米京东自营旗舰店', '小米自营旗舰店', '小米旗舰店'][i % 3],
      iconUrl:"---",
      status: i % 3,
      categoryType: i * 10,
      commentCount: i * 10,
      weight: i * 10,
    });
  }

  return list;
}

// 导出数据

export const NOTICE = getNotice();

export const ACTIVITIES = getActivities();

export const LINKS = links;

export const MEMBERS = members;

export const GET_FAKE_LIST = (count: number = 20)  => getFakeList(count);

export const GET_FAKE_GOODS_LIST = (count: number = 20)  => getFakeGoodsList(count);

//

export const TRAVEL_ITEM_LIST : TravelItem[] = [
  {
    id: 12,
    tid: 12,
    url : "http://www.mafengwo.cn/i/17165833.html",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"五一漫游东京镰仓箱根",
    shortContent :"五一小长假，订了春秋飞 茨城 的便宜机 票。 茨城 到 东京 不远，从 东京 出发，周边有很多可玩的路线。我们选择了灌篮高手的故乡 镰仓 和泡温泉的 箱根 ，然后再回 东京 购物。恰逢 日本 天...\n",
    authorId :"22222",
    authorName :"Jennifer",
    authorUrl :"http://www.mafengwo.cn/u/88382221.html",
    authorImage :"http://n2-q.mafengwo.net/s9/M00/74/B4/wKgBs1bSnauAHUV6AAALPSYbA0Q96.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :111,
    commentCount :20,
    collectCount :30,
    upCount :33,
    destination :"日本",
    travelDate :"2019-09-09"
  },
  {
    id: 12,
    tid: 117094901,
    url : "http://www.mafengwo.cn/i/17094901.html",
    imageUrl : "http://p3-q.mafengwo.net/s13/M00/42/8A/wKgEaVx3eK2AId9aAAVV-WCP2Eo59.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"菲常时光。||薄荷岛的夏天，当OW潜水行邂逅绝美天空之境",
    shortContent :" 旱鸭子的夏天| 鲸沉落海底，温柔呼吸 鲸之于海，我之于你 来自陆地以外71%的吸引 即使在这孤洋 四周无光，冷冽迷茫 人们也甘愿坠落 畏惧深海，却又向往未知 如我可以是鲸，温柔呼吸....... ...",
    authorId :"655810",
    authorName :"秋夕。",
    authorUrl :"http://www.mafengwo.cn/u/655810.html",
    authorImage :"http://n3-q.mafengwo.net/s10/M00/F6/47/wKgBZ1kADsSAWlMLAABhl1kpk-883.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :2359,
    commentCount :28,
    collectCount :24,
    upCount :66,
    destination :"薄荷岛",
    travelDate :"2019-01-27"
  },
  {
    id: 12,
    tid: 12,
    url : "http://www.mafengwo.cn/i/17165833.html",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"五一漫游东京镰仓箱根",
    shortContent :"五一小长假，订了春秋飞 茨城 的便宜机 票。 茨城 到 东京 不远，从 东京 出发，周边有很多可玩的路线。我们选择了灌篮高手的故乡 镰仓 和泡温泉的 箱根 ，然后再回 东京 购物。恰逢 日本 天...\n",
    authorId :"22222",
    authorName :"Jennifer",
    authorUrl :"http://www.mafengwo.cn/u/88382221.html",
    authorImage :"http://n2-q.mafengwo.net/s9/M00/74/B4/wKgBs1bSnauAHUV6AAALPSYbA0Q96.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :111,
    commentCount :20,
    collectCount :30,
    upCount :33,
    destination :"日本",
    travelDate :"2019-09-09"
  },
  {
    id: 12,
    tid: 117094901,
    url : "http://www.mafengwo.cn/i/17094901.html",
    imageUrl : "http://p3-q.mafengwo.net/s13/M00/42/8A/wKgEaVx3eK2AId9aAAVV-WCP2Eo59.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"菲常时光。||薄荷岛的夏天，当OW潜水行邂逅绝美天空之境",
    shortContent :" 旱鸭子的夏天| 鲸沉落海底，温柔呼吸 鲸之于海，我之于你 来自陆地以外71%的吸引 即使在这孤洋 四周无光，冷冽迷茫 人们也甘愿坠落 畏惧深海，却又向往未知 如我可以是鲸，温柔呼吸....... ...",
    authorId :"655810",
    authorName :"秋夕。",
    authorUrl :"http://www.mafengwo.cn/u/655810.html",
    authorImage :"http://n3-q.mafengwo.net/s10/M00/F6/47/wKgBZ1kADsSAWlMLAABhl1kpk-883.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :2359,
    commentCount :28,
    collectCount :24,
    upCount :66,
    destination :"薄荷岛",
    travelDate :"2019-01-27"
  },
  {
    id: 12,
    tid: 12,
    url : "http://www.mafengwo.cn/i/17165833.html",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"五一漫游东京镰仓箱根",
    shortContent :"五一小长假，订了春秋飞 茨城 的便宜机 票。 茨城 到 东京 不远，从 东京 出发，周边有很多可玩的路线。我们选择了灌篮高手的故乡 镰仓 和泡温泉的 箱根 ，然后再回 东京 购物。恰逢 日本 天...\n",
    authorId :"22222",
    authorName :"Jennifer",
    authorUrl :"http://www.mafengwo.cn/u/88382221.html",
    authorImage :"http://n2-q.mafengwo.net/s9/M00/74/B4/wKgBs1bSnauAHUV6AAALPSYbA0Q96.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :111,
    commentCount :20,
    collectCount :30,
    upCount :33,
    destination :"日本",
    travelDate :"2019-09-09"
  },
  {
    id: 12,
    tid: 117094901,
    url : "http://www.mafengwo.cn/i/17094901.html",
    imageUrl : "http://p3-q.mafengwo.net/s13/M00/42/8A/wKgEaVx3eK2AId9aAAVV-WCP2Eo59.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"菲常时光。||薄荷岛的夏天，当OW潜水行邂逅绝美天空之境",
    shortContent :" 旱鸭子的夏天| 鲸沉落海底，温柔呼吸 鲸之于海，我之于你 来自陆地以外71%的吸引 即使在这孤洋 四周无光，冷冽迷茫 人们也甘愿坠落 畏惧深海，却又向往未知 如我可以是鲸，温柔呼吸....... ...",
    authorId :"655810",
    authorName :"秋夕。",
    authorUrl :"http://www.mafengwo.cn/u/655810.html",
    authorImage :"http://n3-q.mafengwo.net/s10/M00/F6/47/wKgBZ1kADsSAWlMLAABhl1kpk-883.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :2359,
    commentCount :28,
    collectCount :24,
    upCount :66,
    destination :"薄荷岛",
    travelDate :"2019-01-27"
  }
  ,{
    id: 12,
    tid: 12,
    url : "http://www.mafengwo.cn/i/17165833.html",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"五一漫游东京镰仓箱根",
    shortContent :"五一小长假，订了春秋飞 茨城 的便宜机 票。 茨城 到 东京 不远，从 东京 出发，周边有很多可玩的路线。我们选择了灌篮高手的故乡 镰仓 和泡温泉的 箱根 ，然后再回 东京 购物。恰逢 日本 天...\n",
    authorId :"22222",
    authorName :"Jennifer",
    authorUrl :"http://www.mafengwo.cn/u/88382221.html",
    authorImage :"http://n2-q.mafengwo.net/s9/M00/74/B4/wKgBs1bSnauAHUV6AAALPSYbA0Q96.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :111,
    commentCount :20,
    collectCount :30,
    upCount :33,
    destination :"日本",
    travelDate :"2019-09-09"
  },
  {
    id: 12,
    tid: 117094901,
    url : "http://www.mafengwo.cn/i/17094901.html",
    imageUrl : "http://p3-q.mafengwo.net/s13/M00/42/8A/wKgEaVx3eK2AId9aAAVV-WCP2Eo59.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    title :"菲常时光。||薄荷岛的夏天，当OW潜水行邂逅绝美天空之境",
    shortContent :" 旱鸭子的夏天| 鲸沉落海底，温柔呼吸 鲸之于海，我之于你 来自陆地以外71%的吸引 即使在这孤洋 四周无光，冷冽迷茫 人们也甘愿坠落 畏惧深海，却又向往未知 如我可以是鲸，温柔呼吸....... ...",
    authorId :"655810",
    authorName :"秋夕。",
    authorUrl :"http://www.mafengwo.cn/u/655810.html",
    authorImage :"http://n3-q.mafengwo.net/s10/M00/F6/47/wKgBZ1kADsSAWlMLAABhl1kpk-883.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
    viewCount :2359,
    commentCount :28,
    collectCount :24,
    upCount :66,
    destination :"薄荷岛",
    travelDate :"2019-01-27"
  }
];

export const GOODS_ITEM_LIST : GoodsItem[] = [
  {
    id: 12,
    tid: 12,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
    "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },{
    id: 13,
    tid: 10003,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },
  {
    id: 14,
    tid: 14,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },{
    id: 15,
    tid: 10003,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },

  {
    id: 16,
    tid: 16,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },{
    id: 17,
    tid: 10003,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },

  {
    id: 18,
    tid: 12,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },{
    id: 19,
    tid: 10003,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },
  {
    id: 20,
    tid: 12,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  },{
    id: 22,
    tid: 10003,
    name:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米",
    imageUrl : "http://b4-q.mafengwo.net/s9/M00/5B/8C/wKgBs12M31yAanXfAAaid3775OQ509.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",
    price:1699.00,
    stock:100,
    description:"Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米\n" +
      "【新品热销，六期免息】王一博同款火爆开售，购机赠耳机，赠完即止【K305G新品开售，评价晒单返京豆】",
    shopName:"小米京东自营旗舰店",
    iconUrl:"",
    status:1,
    categoryType:1,
    commentCount:51000,
    weight:0.559
  }

];
