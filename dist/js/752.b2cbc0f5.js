"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[752],{3752:function(e,t,o){o.r(t),o.d(t,{default:function(){return ue}});var a=o(3396),n=o(9242),l=o(7139);const s={class:"d-flex justify-content-between"},i=(0,a._)("h3",null,"優惠券",-1),d={class:"d-flex"},u={class:"me-3"},p={class:"input-group"},c=["value"],r=(0,a._)("button",{class:"btn btn-secondary input-group-text",type:"submit"},[(0,a._)("i",{class:"bi bi-search"})],-1),h={class:"text-end"},m={class:"bg-light border rounded mt-3 shadow"},_={class:"table mt-4"},b=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"名稱"),(0,a._)("th",null,"優惠碼"),(0,a._)("th",null,"打折"),(0,a._)("th",null,"到期日"),(0,a._)("th",null,"是否啟用"),(0,a._)("th",null,"編輯")])],-1),g={class:"form-check form-switch"},C=["onUpdate:modelValue"],f={class:"form-check-label",for:"flexSwitchCheckChecked"},v={class:"btn-group"},w=["onClick"],y=["onClick"];function x(e,t,o,x,M,k){const D=(0,a.up)("LoadingCom"),U=(0,a.up)("CouponsModal"),L=(0,a.up)("DelCouponsModal"),$=(0,a.up)("PaginationCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(D,{active:M.isLoading},null,8,["active"]),(0,a._)("div",s,[i,(0,a._)("div",d,[(0,a._)("form",u,[(0,a._)("div",p,[(0,a._)("input",{class:"form-control form-control-sm",type:"search",placeholder:"請輸入優惠券名稱",value:M.searchInput,onChange:t[0]||(t[0]=e=>M.searchInput=e.target.value),"aria-label":"Search"},null,40,c),r])]),(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-primary text-white",onClick:t[1]||(t[1]=(0,n.iM)((e=>k.openModal(!0)),["prevent"]))},"新增優惠券")])])]),(0,a._)("div",m,[(0,a._)("table",_,[b,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.searchData,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,l.zw)(t.title),1),(0,a._)("td",null,(0,l.zw)(t.code),1),(0,a._)("td",null,(0,l.zw)(t.percent)+"%",1),(0,a._)("td",null,(0,l.zw)(e.$filters.date(t.due_date)),1),(0,a._)("td",null,[(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked","onUpdate:modelValue":e=>t.is_enabled=e,"true-value":1,"false-value":0},null,8,C),[[n.e8,t.is_enabled]]),(0,a._)("label",f,(0,l.zw)(t.is_enabled?"啟用":"未啟用"),1)])]),(0,a._)("td",null,[(0,a._)("div",v,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,n.iM)((e=>k.openModal(!1,t)),["prevent"])},"編輯",8,w),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,n.iM)((e=>k.delModal(t)),["prevent"])},"刪除",8,y)])])])))),128))])])]),(0,a.Wm)(U,{ref:"couponsModal",coupon:M.tempCoupon,onUpdateCoupon:k.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.Wm)(L,{ref:"delCouponsModal",item:M.tempCoupon,onDelItem:k.delCoupon},null,8,["item","onDelItem"]),M.searchInput?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)($,{key:0,pages:M.pagination,onUpdatePage:k.getCoupons},null,8,["pages","onUpdatePage"]))],64)}const M={class:"modal",tabindex:"-1",ref:"modal"},k={class:"modal-dialog modal-xl",role:"document"},D={class:"modal-content border-0"},U=(0,a._)("div",{class:"modal-header bg-primary text-white"},[(0,a._)("h4",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,a._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},$={class:"mb-3"},I=(0,a._)("label",{for:"title"},"標題",-1),S={class:"mb-3"},P=(0,a._)("label",{for:"coupon_code"},"優惠碼",-1),V={class:"mb-3"},z=(0,a._)("label",{for:"percent",class:"form-label"},"打折",-1),Z={class:"mb-3"},j=(0,a._)("label",{for:"due_date"},"到期日",-1),A={class:"mb-3"},N={class:"form-check"},W=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),H={class:"modal-footer"},T=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Y(e,t,o,l,s,i){return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",k,[(0,a._)("div",D,[U,(0,a._)("div",L,[(0,a._)("div",$,[I,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[n.nr,s.tempCoupon.title]])]),(0,a._)("div",S,[P,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>s.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[n.nr,s.tempCoupon.code]])]),(0,a._)("div",V,[z,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[2]||(t[2]=e=>s.tempCoupon.percent=e)},null,512),[[n.nr,s.tempCoupon.percent,void 0,{number:!0}]])]),(0,a._)("div",Z,[j,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[3]||(t[3]=e=>s.due_date=e)},null,512),[[n.nr,s.due_date]])]),(0,a._)("div",A,[(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=e=>s.tempCoupon.is_enabled=e)},null,512),[[n.e8,s.tempCoupon.is_enabled]]),W])])]),(0,a._)("div",H,[T,(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",s.tempCoupon))},"確認")])])])],512)}var q=o(5741),E={data(){return{tempCoupon:{percent:100},due_date:""}},props:{coupon:{}},watch:{coupon(){if(this.tempCoupon=this.coupon,this.tempCoupon.due_date){const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e,console.log("dateAndTime",e)}},due_date(){console.log("this.due_date",this.due_date),this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},emits:["update-coupon"],mixins:[q.Z]},K=o(89);const O=(0,K.Z)(E,[["render",Y]]);var R=O,B=o(2307);const F={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},G={class:"modal-dialog"},J={class:"modal-content"},Q=(0,a._)("div",{class:"modal-header bg-primary text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除產品"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},ee={class:"text-danger"},te={class:"modal-footer"},oe=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function ae(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",G,[(0,a._)("div",J,[Q,(0,a._)("div",X,[(0,a.Uk)(" 請確認是否刪除優惠券 "),(0,a._)("span",ee,(0,l.zw)(o.item.title),1),(0,a.Uk)("，刪除後將無法復原。 ")]),(0,a._)("div",te,[oe,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("del-item",o.item))},"確認")])])])],512)}var ne={props:{item:{}},emits:["del-item"],mixins:[q.Z]};const le=(0,K.Z)(ne,[["render",ae]]);var se=le,ie={data(){return{coupons:[],pagination:{},tempCoupon:{},isNew:!1,isLoading:!1,searchInput:""}},created(){this.getCoupons(),this.searchInput=""},methods:{getCoupons(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/coupons?page=${e}`;this.axios.get(t).then((e=>{this.isLoading=!1,this.coupons=e.data.coupons,this.pagination=e.data.pagination;const t=e.data.pagination.total_pages;if(e.data.pagination.has_next)for(let o=2;o<=t;o++)this.getAllCoupons(o)}))},getAllCoupons(e){const t=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/coupons?page=${e}`;this.axios.get(t).then((e=>{this.coupons=this.coupons.concat(e.data.coupons)}))},openModal(e,t){e?(this.tempCoupon={},this.$refs.couponsModal.due_date=""):this.tempCoupon={...t},this.isNew=e,this.$refs.couponsModal.showModal()},updateCoupon(e){this.isLoading=!0,this.tempCoupon=e;let t="https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/coupon",o="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/coupon/${e.id}`,o="put"),this.axios[o](t,{data:this.tempCoupon}).then((e=>{this.isLoading=!1,this.$refs.couponsModal.hideModal(),this.getCoupons(this.pagination.current_page),this.PushMessageState(e,"更新")}))},delModal(e){this.tempCoupon={...e},this.$refs.delCouponsModal.showModal()},delCoupon(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/coupon/${e.id}`;this.axios.delete(t).then((e=>{this.isLoading=!1,this.$refs.delCouponsModal.hideModal(),this.getCoupons(this.pagination.current_page),this.PushMessageState(e,"刪除")}))}},computed:{searchData(){const e=new RegExp(this.searchInput,"gi");return this.coupons.filter((t=>t.title.match(e)))}},components:{CouponsModal:R,DelCouponsModal:se,PaginationCom:B.Z},inject:["emitter","PushMessageState"]};const de=(0,K.Z)(ie,[["render",x]]);var ue=de}}]);
//# sourceMappingURL=752.b2cbc0f5.js.map