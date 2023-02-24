"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[679],{9227:function(t,e,i){i.d(e,{Z:function(){return f}});var a=i(3396),s=i(9242),o=i(7139);const n={"aria-label":"Page navigation",class:"mt-4"},r={class:"pagination justify-content-center pagination-sm"},c={class:"page-item"},l=(0,a._)("span",{"aria-hidden":"true"},"«",-1),d=[l],u=["onClick"],g={class:"page-item"},p=(0,a._)("span",{"aria-hidden":"true"},"»",-1),h=[p];function m(t,e,i,l,p,m){return(0,a.wg)(),(0,a.iD)("nav",n,[(0,a._)("ul",r,[(0,a._)("li",c,[(0,a._)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>m.updatePage(p.currentPage-1)),["prevent"])),"aria-label":"Previous"},d)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===i.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,u)],2)))),128)),(0,a._)("li",g,[(0,a._)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,s.iM)((t=>m.updatePage(p.currentPage+1)),["prevent"])),"aria-label":"Next"},h)])])])}var v={data(){return{currentPage:1}},props:["pages"],methods:{updatePage(t){t>0&&t<=this.pages.total_pages&&(this.$emit("update-page",t),document.documentElement.scrollTop=0,this.currentPage=t)}}},b=i(89);const _=(0,b.Z)(v,[["render",m]]);var f=_},3674:function(t,e,i){i.d(e,{Z:function(){return w}});var a=i(3396),s=i(9242),o=i(7139);const n={class:"my-4"},r={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5"},c=["onClick"],l={class:"position-absolute bottom-0 end-0 p-1"},d=["onClick"],u=["onClick","disabled"],g=(0,a._)("i",{class:"bi bi-cart"},null,-1),p=[g],h={key:0,class:"position-absolute top-0 start-0 px-2 py-1"},m=(0,a._)("i",{class:"bi bi-gift text-danger"},null,-1),v=[m],b=["onClick"],_={class:"card-text fw-bold text-secondary mt-2"};function f(t,e,i,g,m,f){const k=(0,a.up)("LoadingCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{active:m.isLoading},null,8,["active"]),(0,a._)("main",null,[(0,a._)("section",n,[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.products,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col",key:e.id},[(0,a._)("a",{href:"javascript:;",onClick:(0,s.iM)((t=>f.getProduct(e.id)),["prevent"])},[(0,a._)("div",{style:(0,o.j5)({backgroundImage:`url(${e.imageUrl})`}),class:"product-img bg-center rounded mb-3 position-relative"},[(0,a._)("div",l,[(0,a._)("button",{class:"btn btn-sm btn-light rounded-4",onClick:(0,s.iM)((t=>f.addToWishList(e)),["stop"])},[(0,a._)("i",{class:(0,o.C_)(["bi",f.heart(e)])},null,2)],8,d),(0,a._)("button",{class:"btn btn-sm btn-light rounded-4 ms-1",onClick:(0,s.iM)((t=>f.addToCart(e)),["stop"]),disabled:m.loadingItem===e.id},p,8,u)]),e.is_gift?((0,a.wg)(),(0,a.iD)("div",h,v)):(0,a.kq)("",!0)],4)],8,c),(0,a._)("a",{href:"javascript:;",onClick:(0,s.iM)((t=>f.getProduct(e.id)),["prevent"]),class:"h6 link-dark-h"},(0,o.zw)(e.title),9,b),(0,a._)("p",_,(0,o.zw)(t.$filters.currency(e.price)),1)])))),128))])])])],64)}i(7658);var k={data(){return{isLoading:!1,loadingItem:""}},props:{products:{type:Array,default(){return[]}}},methods:{getProduct(t){this.$router.push(`/user/product/${t}`)},addToCart(t){this.loadingItem=t.id,this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart",i={product_id:t.id,qty:1};this.axios.post(e,{data:i}).then((t=>{this.loadingItem="",this.isLoading=!1,this.PushMessageState(t,"加入購物車"),this.emitter.emit("cart-qty")}))},addToWishList(t){localStorage.getItem(t.id)?(localStorage.removeItem(t.id),this.emitter.emit("wished-qty")):(localStorage.setItem(t.id,JSON.stringify(t)),this.emitter.emit("wished-qty")),this.$emit("get-products")},heart(t){return localStorage.getItem(t.id)?"bi-heart-fill":"bi-heart"}},emits:["get-products"],inject:["emitter","PushMessageState"]},P=i(89);const C=(0,P.Z)(k,[["render",f]]);var w=C},7679:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var a=i(3396);function s(t,e,i,s,o,n){const r=(0,a.up)("LoadingCom"),c=(0,a.up)("ProductCategory"),l=(0,a.up)("PaginationCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{active:o.isLoading},null,8,["active"]),(0,a.Wm)(c,{products:o.products,onGetProducts:e[0]||(e[0]=t=>n.getProducts())},null,8,["products"]),(0,a.Wm)(l,{pages:o.pagination,onUpdatePage:n.getProducts},null,8,["pages","onUpdatePage"])],64)}var o=i(3674),n=i(9227),r={data(){return{products:[],flowers:[],isLoading:!1,pagination:{total_pages:""}}},created(){this.getProducts()},methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/products?page=${t}`;this.axios.get(e).then((t=>{this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination}))}},components:{ProductCategory:o.Z,PaginationCom:n.Z}},c=i(89);const l=(0,c.Z)(r,[["render",s]]);var d=l}}]);
//# sourceMappingURL=679.8834a699.js.map