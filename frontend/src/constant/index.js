import workBannerUrl from '@/assets/work_banner.png'
import workAppUrl from '@/assets/work_app.png'
import workWebUrl from '@/assets/work_web.png'

export const TABS = () => ([
  {
    value: 'home',
    label: '首页'
  },
  {
    value: 'profile',
    label: '个人简介'
  },
  {
    value: 'mywork',
    label: '我的作品'
  },
  {
    value: 'contact',
    label: '联系我'
  }
])

export const WORK_ITEMS = () => ([
  {
    name: 'APP 设计',
    imgUrl: workAppUrl
  },
  {
    name: '网页设计',
    imgUrl: workWebUrl
  },
  {
    name: 'BANNER 设计',
    imgUrl: workBannerUrl
  }
])

export const CONTACT_ITEMS = () => ([
  {
    name: '电话：15071437560',
    icon: 'fas fa-phone-alt',
    description: '(微信同号)'
  },
  {
    name: '微信：Zerocloud-1104',
    icon: 'fab fa-weixin',
    description: ''
  },
  {
    name: '邮箱：973773273@qq.com',
    icon: 'fas fa-envelope',
    description: ''
  },
  {
    name: 'QQ：973773273',
    icon: 'fab fa-qq',
    description: ''
  }
])

export const WORK_EXPERIENCE = () => ([
  {
    time: '2018.03',
    iconUrl: '',
    text: '在卡巴青少儿科技活动中心，担任逻辑思维老师。',
    description: '我人生的第一份正式工作是在正式毕业之前，是因为当时临近毕业的焦虑感。'
  },
  {
    time: '2018.06',
    iconUrl: '',
    text: '从湖北第二师范学院毕业啦！',
    description: ''
  },
  {
    time: '2019.02',
    iconUrl: '',
    text: '从卡巴青少儿活动中心离职，主要是因为公司一共有三门课程， 最不重视的就是自己从事的逻辑思维课程。',
    description: '其实一直就有想要从事设计工作的想法，大二的时候因为兴趣有运营过自己的公众号，喜欢自己排版设计的感觉。但是第一份工作确是没有让自己有积蓄，不能支持自己安心在家学习软件。'
  },
  {
    time: '2019.04',
    iconUrl: '',
    text: '入职火花思维，开始新一段的逻辑思维辅导老师之旅……',
    description: ''
  },
  {
    time: '2020.04',
    iconUrl: '',
    text: '从火花思维离职，下定决心自学设计。',
    description: '在火花的这一年锻炼，真正完成了从毕业生到社会人的蜕变。同时服务近300学员和家长，一年的相处没有任何一例投诉，真正学会了在工作中永远把客户的需求放在最前面。当然，这一年收获的还有足够支撑自己安心在家学习设计的积蓄。终于离自己喜欢的行业更近了一步。'
  },
  {
    time: '2020.05',
    iconUrl: '',
    text: '正式开启每日坚持自学设计、坚持健身、坚持做饭的规律生活。',
    description: ''
  },
  {
    time: '2020.08',
    iconUrl: '',
    text: '有偿帮朋友公司（中清控（武汉）科技有限公司）救急，接到自己第一个设计项目《白鹤滩大坝温控预警》。',
    description: ''
  },
  {
    time: '2020.09',
    iconUrl: '',
    text: '我的未来，希望能和贵公司一起谱写。',
    description: ''
  }
])
