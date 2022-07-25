import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import UserFollowList from '../views/UserFollowList.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'setting-form',
    component: () => import('../views/SettingForm.vue')
  },
  {
    path: '/main/',
    name: 'main',
    redirect: '/main/mainpage',
    component: Main,
    children: [
      {
        name: 'main-page',
        path: 'mainpage',
        component: () => import('../views/MainPage')
      },
      {
        name: 'reply-list',
        path: 'replylist/:id',
        component: () => import('../views/ReplyList')
      },
    ]
  },
  {
    path: '/users/:id/followlist/',
    name: 'user-follow-list',
    redirect: '/users/:id/followlist/followers',
    component: UserFollowList,
    children: [
      {
        name: 'user-followers',
        path: 'followers',
        component: () => import('../views/UserFollowers')
      },
      {
        name: 'user-followings',
        path: 'followings',
        component: () => import('../views/UserFollowings')
      },
    ]
  },
  {
    path: '/users/:id',
    name: 'user',
    redirect: '/users/:id/tweets',
    component: User,
    children: [
      {
        name: 'main-tweets',
        path: 'tweets',
        component: () => import('../views/MainTweets')
      },
      {
        name: 'replies',
        path: 'replies',
        component: () => import('../views/Replies')
      },
      {
        name: 'liked-tweets',
        path: 'liked',
        component: () => import('../views/likedTweets')
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
