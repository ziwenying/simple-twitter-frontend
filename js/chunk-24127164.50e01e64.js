(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24127164"],{"369c":function(o,t,l){"use strict";l.r(t);var a=function(){var o=this,t=o._self._c;return t("Followers",{attrs:{followerList:o.followerList}})},e=[],s=(l("d9e2"),l("cd53")),i=l("2fa3"),n=l("4cce"),r={name:"UserFollowers",props:{changeFollow:{type:Boolean,required:!0}},components:{Followers:s["a"]},data(){return{followerList:[]}},watch:{changeFollow(){const{id:o}=this.$route.params;this.fetchFollowers(o)}},created(){const{id:o}=this.$route.params;this.fetchFollowers(o)},methods:{async fetchFollowers(o){try{const t=await n["a"].getFollowers({userId:o}),{data:l}=t;if("OK"!==t.statusText)throw new Error(l.message);0===l.length&&i["a"].fire({icon:"info",title:"您的追隨者清單是空的"}),this.followerList=l}catch(t){console.error(t.message),i["a"].fire({icon:"error",title:"無法取得追隨者資料"})}}}},c=r,d=l("2877"),f=Object(d["a"])(c,a,e,!1,null,null,null);t["default"]=f.exports},"392b":function(o,t,l){var a=l("3e2d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);var e=l("499e").default;e("25fa3662",a,!0,{sourceMap:!1,shadowMode:!1})},"3e2d":function(o,t,l){var a=l("24fb");t=a(!1),t.push([o.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap);"]),t.push([o.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap);"]),t.push([o.i,"body[data-v-142c3a9e]{margin:0;padding:0;font-family:Noto Sans TC,sans-serif}*[data-v-142c3a9e]{box-sizing:border-box}h1[data-v-142c3a9e],h2[data-v-142c3a9e],h3[data-v-142c3a9e],h4[data-v-142c3a9e],h5[data-v-142c3a9e],h6[data-v-142c3a9e],p[data-v-142c3a9e]{margin:0;padding:0}h1[data-v-142c3a9e],h2[data-v-142c3a9e]{font-weight:700}h3[data-v-142c3a9e],h4[data-v-142c3a9e],h5[data-v-142c3a9e]{font-weight:medium}h1[data-v-142c3a9e]{font-size:68px}h2[data-v-142c3a9e]{font-size:42px}h3[data-v-142c3a9e]{font-size:28px}h4[data-v-142c3a9e]{font-size:24px}h5[data-v-142c3a9e]{font-size:18px}li[data-v-142c3a9e],ol[data-v-142c3a9e],ul[data-v-142c3a9e]{list-style:none;margin:0;padding:0}a[data-v-142c3a9e],a[data-v-142c3a9e]:focus,a[data-v-142c3a9e]:hover{text-decoration:none}img[data-v-142c3a9e]{width:100%;height:100%;display:block}.btn[data-v-142c3a9e],a[data-v-142c3a9e]:focus,button[data-v-142c3a9e],button[data-v-142c3a9e]:focus,input[data-v-142c3a9e]:focus,select[data-v-142c3a9e],select[data-v-142c3a9e]:focus,textarea[data-v-142c3a9e]:focus{outline:0!important}button[data-v-142c3a9e]{background-color:transparent;border:0;cursor:pointer}button[disabled][data-v-142c3a9e]{pointer-events:none}input[data-v-142c3a9e]{padding:0}input[data-v-142c3a9e]:invalid,input[data-v-142c3a9e]:required{box-shadow:none}.d-none[data-v-142c3a9e]{display:none}.follow-lists .follow-list .follow-link .btn-follow[data-v-142c3a9e]{height:40px;background:#f60;color:#fff;border-radius:50px}.follow-lists .follow-list .follow-link .btn-unfollow[data-v-142c3a9e]{height:40px;background:#fff;color:#f60;border-radius:50px;border:1px solid #f60}.follow-lists[data-v-142c3a9e]{border-right:1px solid #e6ecf0}.follow-lists .follow-list[data-v-142c3a9e]:hover{background:#f1f1f5}.follow-lists .follow-list .follow-link[data-v-142c3a9e]{display:flex;position:relative;max-height:158px;padding:16px 23px 16px 23px;border-bottom:1px solid #e6ecf0;border-left:1px solid #e6ecf0}.follow-lists .follow-list .follow-link .user-avatar[data-v-142c3a9e]{width:50px;height:50px;border-radius:50%}.follow-lists .follow-list .follow-link .follow-content[data-v-142c3a9e]{margin:0 0 0 8px;width:88%}.follow-lists .follow-list .follow-link .follow-content .follow-name[data-v-142c3a9e]{margin:7px 8px 0 0;font-weight:700;color:#171725}.follow-lists .follow-list .follow-link .follow-content .follow-name[data-v-142c3a9e]:hover{text-decoration:underline}.follow-lists .follow-list .follow-link .follow-content .account-time[data-v-142c3a9e]{color:#6c757d;font-size:14px}.follow-lists .follow-list .follow-link .follow-content .follow-intro[data-v-142c3a9e]{margin:15px 0 0 0;color:#171725;line-height:26px;overflow-wrap:break-word}.follow-lists .follow-list .follow-link .btn-follow[data-v-142c3a9e]{position:absolute;top:16px;right:30px;width:96px}.follow-lists .follow-list .follow-link .btn-unfollow[data-v-142c3a9e]{position:absolute;top:16px;right:30px;width:64px}",""]),o.exports=t},"6f4b":function(o,t,l){"use strict";l("392b")},cd53:function(o,t,l){"use strict";var a=function(){var o=this,t=o._self._c;return t("div",{staticClass:"follow-lists"},o._l(o.showFollowLists,(function(l){return t("div",{key:l.followId,staticClass:"follow-list"},[t("router-link",{staticClass:"follow-link",attrs:{to:{path:`/users/${l.followId}/tweets`}}},[t("img",{staticClass:"user-avatar",attrs:{src:l.avatar,alt:"user-avatar"}}),t("div",{staticClass:"follow-content"},[t("p",{staticClass:"follow-name"},[o._v(o._s(l.name))]),t("p",{staticClass:"follow-intro"},[o._v(" "+o._s(l.introduction)+" ")])]),l.isFollowing?t("button",{staticClass:"btn-follow",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),o.deleteFollowed(l.followId)}}},[o._v(" 正在跟隨 ")]):o._e(),l.isFollowing?o._e():t("button",{staticClass:"btn-unfollow",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),o.addFollowed(l.followId)}}},[o._v(" 跟隨 ")])])],1)})),0)},e=[],s=(l("d9e2"),l("2fa3")),i=l("4cce"),n=l("2f62"),r={name:"FollowerNavPills",props:{followerList:{type:Array,default:()=>[{followId:-1,followerId:-1,name:"",account:"",avatar:"",introduction:"",isFollowing:!1}]},followingList:{type:Array,default:()=>[{followId:-1,followingId:-1,name:"",account:"",avatar:"",introduction:"",isFollowing:!1}]}},computed:{...Object(n["b"])(["currentUser","topPopular"])},data(){return{showFollowLists:[]}},watch:{followerList(o){this.showFollowLists=[...o]},followingList(o){this.showFollowLists=[...o]}},created(){"user-followers"===this.$route.name?this.showFollowLists=this.followerList.length?this.followerList:[]:"user-followings"===this.$route.name&&(this.showFollowLists=this.followingList.length?this.followingList:[])},methods:{async addFollowed(o){try{const{data:t}=await i["a"].addfollowed({id:o});if("error"===t.status)throw new Error(t.message);this.showFollowLists=this.showFollowLists.map(t=>o===t.followId?{...t,isFollowing:!t.isFollowing}:t),this.$store.dispatch("fetchPopular"),s["a"].fire({icon:"success",title:"成功追蹤該使用者"})}catch(t){console.error(t.message),"Can not follow yourself."===t.message?s["a"].fire({icon:"warning",title:"不能追蹤自己唷！"}):s["a"].fire({icon:"error",title:"無法追蹤該使用者，請稍後再試"})}},async deleteFollowed(o){try{const{data:t}=await i["a"].deletefollowed({userId:o});if("error"===t.status)throw new Error(t.message);this.showFollowLists=this.showFollowLists.map(t=>o===t.followId?{...t,isFollowing:!t.isFollowing}:t),this.$store.dispatch("fetchPopular"),s["a"].fire({icon:"success",title:"已取消追蹤該使用者"})}catch(t){console.error(t.message),s["a"].fire({icon:"error",title:"無法取消追蹤該使用者，請稍後再試"})}}}},c=r,d=(l("6f4b"),l("2877")),f=Object(d["a"])(c,a,e,!1,null,"142c3a9e",null);t["a"]=f.exports}}]);
//# sourceMappingURL=chunk-24127164.50e01e64.js.map