"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[546],{6546:function(t,i,s){s.r(i),s.d(i,{default:function(){return L}});var e=s(3396),o=s(9242),a=s(7139);const r={class:"container"},c={key:0,class:"my-4"},n={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5 h-100"},d=["onClick"],l={class:"position-absolute bottom-0 end-0 p-1"},h=["onClick"],u=(0,e._)("i",{class:"bi bi-trash3"},null,-1),g=[u],p=["onClick"],m=(0,e._)("i",{class:"bi bi-cart"},null,-1),b=[m],k=["onClick"],v={class:"card-text fw-bold text-secondary mt-2 mb-0"},f={key:1,class:"mb-5 fs-5"};function w(t,i,s,u,m,w){const C=(0,e.up)("LoadingCom");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(C,{active:m.isLoading},null,8,["active"]),(0,e._)("div",r,[m.id.length>0?((0,e.wg)(),(0,e.iD)("section",c,[(0,e._)("div",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(m.product,(i=>((0,e.wg)(),(0,e.iD)("div",{class:"col h-100",key:i.id},[(0,e._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>w.getProduct(i.id)),["prevent"])},[(0,e._)("div",{style:(0,a.j5)({backgroundImage:`url(${i.imageUrl})`}),class:"product-img bg-center rounded mb-3 position-relative"},[(0,e._)("div",l,[(0,e._)("button",{class:"btn btn-sm btn-light rounded-4",onClick:(0,o.iM)((t=>w.removeWishList(i.id)),["stop"])},g,8,h),(0,e._)("button",{class:"btn btn-sm btn-light rounded-4 ms-1",onClick:(0,o.iM)((t=>w.addToCart(i)),["stop"])},b,8,p)])],4)],8,d),(0,e._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>w.getProduct(i.id)),["prevent"]),class:"h6 link-dark-h"},(0,a.zw)(i.title),9,k),(0,e._)("p",v,(0,a.zw)(t.$filters.currency(i.price)),1)])))),128))])])):((0,e.wg)(),(0,e.iD)("p",f,"目前我的最愛是空的，請選擇商品加入。"))])],64)}s(7658);var C={data(){return{product:[],isLoading:!1,id:[]}},created(){this.getId()},methods:{getProduct(t){this.$router.push(`/user/product/${t}`)},addToCart(t){this.isLoading=!0;const i="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart",s={product_id:t.id,qty:1};this.axios.post(i,{data:s}).then((t=>{this.isLoading=!1,this.PushMessageState(t,"加入購物車"),this.emitter.emit("cart-qty")}))},removeWishList(t){this.isLoading=!0,localStorage.removeItem(t),this.getId(),this.emitter.emit("wished-qty"),this.isLoading=!1},getId(){this.id=[];for(let t=0;t<localStorage.length;t++)this.id.push(localStorage.key(t));this.getWishProduct()},getWishProduct(){this.product=[],this.id.forEach((t=>{const i=JSON.parse(localStorage.getItem(t));this.product.push(i)}))}},inject:["emitter","PushMessageState"]},y=s(89);const _=(0,y.Z)(C,[["render",w]]);var L=_}}]);
//# sourceMappingURL=546.2fef581f.js.map