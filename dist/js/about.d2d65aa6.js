"use strict";(self["webpackChunkrestoroulette"]=self["webpackChunkrestoroulette"]||[]).push([[443],{7817:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("CustomViewer",{attrs:{msg:"показать только с бизнес-ланчем "}})],1)},n=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-3",staticStyle:{height:"75vh","overflow-y":"auto"}},[t("div",{staticClass:"d-flex justify-content-center"},[t("h6",{staticClass:"m-1"},[e._v("только с бизнес-ланчем ")]),t("b-form-checkbox",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),t("b-table",{staticClass:"mb-2 mt-2",attrs:{items:e.filteredRestaurants,fields:e.visibleFields,striped:"",hover:""},on:{"row-clicked":e.onRowClicked},scopedSlots:e._u([{key:"cell(business_lunch)",fn:function(s){return[t("span",[e._v(e._s(s.item.business_lunch?"есть":"нет"))])]}},{key:"cell(distance)",fn:function(s){return[0==s.item.distance?t("span",[e._v("-")]):t("span",[e._v(e._s(s.item.distance))])]}},{key:"cell(price)",fn:function(s){return[0==s.item.price?t("span",[e._v("-")]):t("span",[e._v(e._s(s.item.price))])]}},{key:"cell(time)",fn:function(s){return[0==s.item.time?t("span",[e._v("-")]):t("span",[e._v(e._s(s.item.time))])]}}])})],1)},a=[],l=(s(7658),{name:"CustomViewer",props:{msg:String},data(){return{fields:[{key:"name",label:"Название",visible:!0},{key:"address",label:"Адрес",visible:!0},{key:"business_lunch",label:"Б.ланч",visible:!0},{key:"cuisine",label:"Кухня",visible:!0},{key:"distance",label:"Расстояние",visible:!0},{key:"landmark",label:"Расположение",visible:!0},{key:"price",label:"Чек",visible:!0},{key:"time",label:"Время в пути",visible:!0}],screenWidth:window.innerWidth}},created(){this.init(),window.addEventListener("resize",this.handleResize)},destroyed(){window.removeEventListener("resize",this.handleResize)},computed:{idRestaurant(){return this.$store.state.idRestaurant},restaurants(){return this.$store.state.restaurants},visibleFields(){return this.fields.filter((e=>e.visible))},filteredRestaurants(){return this.selected?this.restaurants.filter((e=>!0===e.business_lunch)):this.restaurants},selected:{get(){return this.$store.state.selected},set(e){this.$store.commit("SET_SELECTED",e)}}},watch:{idRestaurant(){this.$router.push("/"),this.findRestaurant()}},methods:{async init(){this.handleResize(),0===this.restaurants.length&&await this.$store.dispatch("fetchRestaurants")},onRowClicked(e){this.$store.commit("SET_ID_RESTAURANT",e.id)},async findRestaurant(){await this.$store.dispatch("getRestorauntById")},handleResize(){this.screenWidth=window.innerWidth,this.screenWidth<900?this.fields.forEach((e=>{"name"!==e.key&&"address"!==e.key&&"business_lunch"!==e.key&&(e.visible=!1)})):this.fields.forEach((e=>{e.visible=!0}))}}}),c=l,u=s(1001),d=(0,u.Z)(c,r,a,!1,null,"cf53549c",null),o=d.exports,h={name:"HomeView",components:{CustomViewer:o}},f=h,m=(0,u.Z)(f,i,n,!1,null,null,null),b=m.exports}}]);
//# sourceMappingURL=about.d2d65aa6.js.map