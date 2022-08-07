import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import UserFollowList from '../views/UserFollowList.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import store from './../store'
import { Toast } from './../utils/helpers'


Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('not-found')
    return
  }
  next()
}


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
    name: 'setting',
    component: () => import('../views/Setting.vue'),
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
        component: () => import('../views/MainPage'),
      },
      {
        name: 'reply-list',
        path: 'replylist/:id',
        component: () => import('../views/ReplyList'),
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
        component: () => import('../views/UserFollowers'),
      },
      {
        name: 'user-followings',
        path: 'followings',
        component: () => import('../views/UserFollowings'),
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
        component: () => import('../views/MainTweets'),
      },
      {
        name: 'replies',
        path: 'replies',
        component: () => import('../views/Replies'),
      },
      {
        name: 'liked-tweets',
        path: 'liked',
        component: () => import('../views/likedTweets'),
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
    component: () => import('../views/AdminTweets.vue'),
    beforeEnter: authorizeIsAdmin  // 進入前驗證是否為管理員, 不是就直接導向not-found
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
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

// 去需要topPopular的頁面就拉取一次topPopular資料
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  // 有token的話
  if (token) {
    // 拉currentUserAPI確認角色身分
    let { role } = await store.dispatch('fetchCurrentUser')
    const pageWithPopular = ['main-page', 'reply-list', 'user-followers', 'user-followings', 'main-tweets', 'replies', 'liked-tweets']
    // 如果身分是user並且要去的地方是有Popular的頁面, 才拉取Popular的資料
    if (pageWithPopular.includes(to.name) && role === 'user') {
      store.dispatch('fetchPopular')
    }
  }
   next()
}) 

// 每次切換路由都拉取一次currentUser資料
router.beforeEach(async (to, from, next) => {
  // 拿出token
  const token = localStorage.getItem('token')
  // 無須驗證即可瀏覽的頁面
  const pathWithoutToken = ['login', 'sign-up', 'admin-login']
  // 管理員可以去的頁面(包含無須驗證即可瀏覽的頁面)
  const pathAdminCanEnter = ['login', 'sign-up', 'admin-login', 'admin-tweets', 'admin-users']
  // 如果沒有token(沒有登入), 並且要去的頁面是其他需要驗證的頁面, 直接導向登入頁
  if (!token && !pathWithoutToken.includes(to.name)) {
    Toast.fire({
      icon: 'warning',
      title: '您無權訪問該頁面，請先進行登入'
    })
    next('login')
    return
    //如果有token
  } else if (token) {
    // fetchCurrentUser時, 取得是否通過驗證, 以及是user還是admin
    let { isAuthenticated, role } = await store.dispatch('fetchCurrentUser')
    // 驗證無效, 要去的地方是需驗證的頁面, 直接導向登入頁
    if (!isAuthenticated && !pathWithoutToken.includes(to.name)) {
      Toast.fire({
        icon: 'warning',
        title: '您無權訪問該頁面，請先進行登入'
      })
      next('/login')
      return
    }
    // 驗證有效, 且身分是user: 如果要去註冊或前台登入頁, 轉址到首頁
    if (isAuthenticated && role === 'user') {
      if (to.name === 'login' || to.name === 'sign-up') {
        next('/main/mainpage')
        return
      }
      // 驗證有效, 且身分是admin: 如果要去後台登入頁, 轉址到後台推文清單
    } else if (isAuthenticated && role === 'admin') {
      if (to.name === 'admin-login') {
        next('/admin/tweets')
        return
        // 如果要去管理員無權瀏覽的頁面, 轉址登入頁
      } else if (!pathAdminCanEnter.includes(to.name)) {
        Toast.fire({
          icon: 'warning',
          title: '您無權訪問該頁面，請先進行登入'
        })
        next('/login')
        return
      }
    }
    next()
  }

  next()
})


export default router
