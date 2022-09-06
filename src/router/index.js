import Vue from 'vue'
import Router from 'vue-router'
//登陆
import login from '../components/login/login'
// 任务管理
import audit from '../components/mission/audit/audit'
import complaint from '../components/mission/complaint/complaint'
import Complaints from '../components/mission/Complaints/Complaints'
import finish from '../components/mission/finish/finish'
import report from '../components/mission/report/report'
import underway from '../components/mission/underway/underway'

import auditck from '../components/missionck/auditck/auditck'
import underwayck from '../components/missionck/underwayck/underwayck'
import finishck from '../components/missionck/finishck/finishck'
import complaintck from '../components/missionck/complaintck/complaintck'
import Complaintsck from '../components/missionck/Complaintsck/Complaintsck'
import reportck from '../components/missionck/reportck/reportck'


// 运营管理
import advertising from '../components/operation/advertising/advertising'
import activity from '../components/operation/activity/activity'
import posters from '../components/operation/posters/posters'
import posterstjxg from '../components/operation/posterstjxg/posterstjxg'
// 文章管理
import announcement from '../components/article/announcement/announcement'
import headlines from '../components/article/headlines/headlines'
import headlinestjxg from '../components/article/headlinestjxg/headlinestjxg'
// 用户管理
import domestic from '../components/user/domestic/domestic'
import vipuser from '../components/user/vipuser/vipuser'
import blacklist from '../components/user/blacklist/blacklist'
import leave from '../components/user/leave/leave'
import domesticbj from '../components/userbj/domesticbj/domesticbj'
import vipuserbj from '../components/userbj/vipuserbj/vipuserbj'
import blacklistbj from '../components/userbj/blacklistbj/blacklistbj'

// 财务管理
import statement from '../components/finance/statement/statement'
import record from '../components/finance/record/record'
import commission from '../components/finance/commission/commission'
import deposit from '../components/finance/deposit/deposit'
// 系统管理
import role from '../components/set/role/role'
import account from '../components/set/account/account'
import payment from '../components/set/payment/payment'
import withdrawal from '../components/set/withdrawal/withdrawal'
import domain from '../components/set/domain/domain'
import appsz from '../components/set/appsz/appsz'
import sensitive from '../components/set/sensitive/sensitive'
import vipsz from '../components/set/vipsz/vipsz'
import tsszadd from '../components/setadd/tsszadd/tsszadd'
import tssz from '../components/set/tssz/tssz'
import task from '../components/set/task/task'
//测试
import cheshi from '../components/cheshi/cheshi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //重定向
      path: '/',
      redirect: '/audit'
    },
    {
      path: '/login',
      name: '登陆',
      component: login
    },
    // 任务管理
    {
      path: '/audit',
      component: audit,
      name: '待审核',
      hidden: true
    },
    {
      path: '/auditck',
      component: auditck,
      name: '待审核审核',
      hidden: true
    },
    {
      path: '/underway',
      component: underway,
      name: '进行中',
      hidden: true
    },
    {
      path: '/underwayck',
      component: underwayck,
      name: '进行中详情',
      hidden: true
    },
    {
      path: '/finish',
      component: finish,
      name: '已结束',
      hidden: true
    },
    {
      path: '/finishck',
      component: finishck,
      name: '已结束详情',
      hidden: true
    },
    {
      path: '/complaint',
      component: complaint,
      name: '被投诉',
      hidden: true
    },
    {
      path: '/complaintck',
      component: complaintck,
      name: '被投诉查看',
      hidden: true
    },
    {
      path: '/Complaints',
      component: Complaints,
      name: '用户投诉商家',
      hidden: true
    },
    {
      path: '/Complaintsck',
      component: Complaintsck,
      name: '用户投诉商家处理',
      hidden: true
    },
    {
      path: '/report',
      component: report,
      name: '商家举报用户',
      hidden: true
    },
    {
      path: '/reportck',
      component: reportck,
      name: '商家举报用户处理',
      hidden: true
    },
    // 运营管理
    {
      path: '/advertising',
      component: advertising,
      name: '广告管理',
      hidden: true
    },
    {
      path: '/activity',
      component: activity,
      name: '活动管理',
      hidden: true
    },
    {
      path: '/posters',
      component: posters,
      name: '海报管理',
      hidden: true
    },
    {
      path: '/posterstjxg',
      component: posterstjxg,
      name: '海报添加/编辑',
      hidden: true
    },
    // 文章管理
    {
      path: '/announcement',
      component: announcement,
      name: '头条更换',
      hidden: true
    },
    {
      path: '/headlines',
      component: headlines,
      name: '公告列表',
      hidden: true
    },
    {
      path: '/headlinestjxg',
      component: headlinestjxg,
      name: '公告添加编辑',
      hidden: true
    },
    //  用户管理
    {
      path: '/domestic',
      component: domestic,
      name: '普通用户',
      hidden: true
    },
    {
      path: '/domesticbj',
      component: domesticbj,
      name: '普通用户编辑',
      hidden: true
    },
    {
      path: '/vipuser',
      component: vipuser,
      name: 'Vip用户',
      hidden: true
    },
    {
      path: '/vipuserbj',
      component: vipuserbj,
      name: 'Vip用户编辑',
      hidden: true
    },
    {
      path: '/blacklist',
      component: blacklist,
      name: '黑名单用户',
      hidden: true
    },
    {
      path: '/blacklistbj',
      component: blacklistbj,
      name: '黑名单用户编辑',
      hidden: true
    },
    {
      path: '/leave',
      component: leave,
      name: '用户留言',
      hidden: true
    },
     // 财务管理
     {
      path: '/statement',
      component: statement,
      name: '聚合报表',
      hidden: true
    },
    {
      path: '/record',
      component: record,
      name: 'Vip购买记录',
      hidden: true
    },
    {
      path: '/commission',
      component: commission,
      name: '团队佣金',
      hidden: true
    },
    {
      path: '/deposit',
      component: deposit,
      name: 'deposit',
      hidden: true
    },
    // 系统管理
    {
      path: '/role',
      component: role,
      name: '角色管理',
      hidden: true
    },
    {
      path: '/account',
      component: account,
      name: '账号管理',
      hidden: true
    },
    {
      path: '/payment',
      component: payment,
      name: '支付管理',
      hidden: true
    },
    {
      path: '/withdrawal',
      component: withdrawal,
      name: '提现管理',
      hidden: true
    },
    {
      path: '/domain',
      component: domain,
      name: '域名管理',
      hidden: true
    },
    {
      path: '/appsz',
      component: appsz,
      name: 'APP设置',
      hidden: true
    },
    {
      path: '/sensitive',
      component: sensitive,
      name: '敏感词设置',
      hidden: true
    },
    {
      path: '/vipsz',
      component: vipsz,
      name: 'vip设置',
      hidden: true
    },
    {
      path: '/tsszadd',
      component: tsszadd,
      name: '添加推送设置',
      hidden: true
    },
    {
      path: '/tssz',
      component: tssz,
      name: '推送设置',
      hidden: true
    },
    {
      path: '/task',
      component: task,
      name: '任务分类设置',
      hidden: true
    },
    {
      path: '/cheshi',
      name: '测试',
      component: cheshi
    }


  ]
})

