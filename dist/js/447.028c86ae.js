"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[447],{9447:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var r=s(3396),a=s(7139),c=s(9242);const i={class:"my-4"},n={key:0},o={class:"mb-4"},u={class:"text-primary"},l={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5"},d=["onClick"],h=["onClick"],p={class:"card-text fw-bold text-secondary mt-2"},g={key:1,class:"mb-4"},k={class:"text-primary"};function w(t,e,s,w,m,v){const f=(0,r.up)("LoadingCom");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(f,{active:m.isLoading},null,8,["active"]),(0,r._)("main",null,[(0,r._)("section",i,[v.searchData.length>0?((0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("h4",o,[(0,r.Uk)("以下是 "),(0,r._)("span",u,(0,a.zw)(v.searchInput),1),(0,r.Uk)(" 的搜尋結果：")]),(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.searchData,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:e.id},[(0,r._)("a",{href:"javascript:;",onClick:(0,c.iM)((t=>v.getProduct(e.id)),["prevent"])},[(0,r._)("div",{style:(0,a.j5)([{backgroundImage:`url(${e.imageUrl})`},{height:"350px"}]),class:"bg-center rounded mb-3"},null,4)],8,d),(0,r._)("a",{href:"javascript:;",onClick:(0,c.iM)((t=>v.getProduct(e.id)),["prevent"]),class:"h5 link-dark text-decoration-none"},(0,a.zw)(e.title),9,h),(0,r._)("p",p,(0,a.zw)(t.$filters.currency(e.price)),1)])))),128))])])):((0,r.wg)(),(0,r.iD)("h4",g,[(0,r.Uk)("查無 "),(0,r._)("span",k,(0,a.zw)(v.searchInput),1),(0,r.Uk)(" 相關產品，請重新搜尋。")]))])])],64)}s(7658);var m={data(){return{products:[],isLoading:!1}},created(){this.getProducts()},methods:{getProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/products/all";this.axios.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products}))},getProduct(t){this.$router.push(`/user/product/${t}`)}},computed:{searchInput(){return this.$route.query.q},searchData(){const t=new RegExp(this.searchInput,"gi");return this.products.filter((e=>e.title.match(t)))}},watch:{searchInput(t,e){0!==e.length&&e!==t&&this.$router.go(0)}}},v=s(89);const f=(0,v.Z)(m,[["render",w]]);var y=f}}]);
//# sourceMappingURL=447.028c86ae.js.map